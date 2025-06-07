export interface Currency {
  code: string;
  symbol: string;
  name: string;
  rate: number; // Rate relative to INR
}

export const currencies: Currency[] = [
  { code: 'INR', symbol: '₹', name: 'Indian Rupee', rate: 1 },
  { code: 'USD', symbol: '$', name: 'US Dollar', rate: 0.012 },
  { code: 'GBP', symbol: '£', name: 'British Pound', rate: 0.0095 },
  { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham', rate: 0.044 },
];

export const convertFromINR = (amountInINR: number, targetCurrency: string): number => {
  const currency = currencies.find(c => c.code === targetCurrency);
  if (!currency) return amountInINR;
  
  const converted = amountInINR * currency.rate;
  
  // Round to appropriate decimal places based on currency
  if (targetCurrency === 'INR') return Math.round(converted);
  if (targetCurrency === 'USD' || targetCurrency === 'GBP') return Math.round(converted * 100) / 100;
  if (targetCurrency === 'AED') return Math.round(converted * 10) / 10;
  
  return converted;
};

export const convertToINR = (amount: number, fromCurrency: string): number => {
  const currency = currencies.find(c => c.code === fromCurrency);
  if (!currency) return amount;
  
  return Math.round(amount / currency.rate);
};

export const formatCurrency = (amount: number, currencyCode: string): string => {
  const currency = currencies.find(c => c.code === currencyCode);
  if (!currency) return amount.toString();
  
  const formatted = convertFromINR(amount, currencyCode);
  
  if (currencyCode === 'INR') {
    return `${currency.symbol}${formatted.toLocaleString('en-IN')}`;
  }
  
  return `${currency.symbol}${formatted.toLocaleString('en-US', {
    minimumFractionDigits: currencyCode === 'AED' ? 1 : 2,
    maximumFractionDigits: currencyCode === 'AED' ? 1 : 2
  })}`;
};
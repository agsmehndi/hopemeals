import { database } from '../config/firebase';
import { ref, push, set } from 'firebase/database';

export interface StudentApplication {
  name: string;
  email: string;
  phone: string;
  dob: string;
  college: string;
  year: string;
  familyIncome: string;
  reason: string;
  submittedAt: string;
}

export interface DonationData {
  name: string;
  email: string;
  amount: number;
  currency: string;
  amountInINR: number;
  isMonthly: boolean;
  message?: string;
  submittedAt: string;
}

export const saveStudentApplication = async (applicationData: Omit<StudentApplication, 'submittedAt'>) => {
  try {
    const applicationsRef = ref(database, 'studentApplications');
    const newApplicationRef = push(applicationsRef);
    
    const dataToSave: StudentApplication = {
      ...applicationData,
      submittedAt: new Date().toISOString()
    };
    
    await set(newApplicationRef, dataToSave);
    return { success: true, id: newApplicationRef.key };
  } catch (error) {
    console.error('Error saving student application:', error);
    throw new Error('Failed to save application');
  }
};

export const saveDonationData = async (donationData: Omit<DonationData, 'submittedAt'>) => {
  try {
    const donationsRef = ref(database, 'donations');
    const newDonationRef = push(donationsRef);
    
    const dataToSave: DonationData = {
      ...donationData,
      submittedAt: new Date().toISOString()
    };
    
    await set(newDonationRef, dataToSave);
    return { success: true, id: newDonationRef.key };
  } catch (error) {
    console.error('Error saving donation data:', error);
    throw new Error('Failed to save donation data');
  }
};
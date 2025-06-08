// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6OBm9pcifHkedUt8Jm_qDf1PAYrdW9cE",
  authDomain: "hopemealsindia.firebaseapp.com",
  databaseURL: "https://hopemealsindia-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hopemealsindia",
  storageBucket: "hopemealsindia.firebasestorage.app",
  messagingSenderId: "853540039510",
  appId: "1:853540039510:web:3c5764adb52d2ad4bcc4f7",
  measurementId: "G-FB1CJPMRVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { app, analytics, database };
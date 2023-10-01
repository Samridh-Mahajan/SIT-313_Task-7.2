// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCbSY2zgNQHiv2_woxjqQltjx9xqGjRZLg",
  authDomain: "sit-313-task-7-2.firebaseapp.com",
  projectId: "sit-313-task-7-2",
  storageBucket: "sit-313-task-7-2.appspot.com",
  messagingSenderId: "126432293783",
  appId: "1:126432293783:web:037ab33cc88ccbb542cad2",
  measurementId: "G-TBFEV6T6YE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app); 
export const storage = getStorage(app);
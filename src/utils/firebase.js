// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "zakblogs-c3b28.firebaseapp.com",
  projectId: "zakblogs-c3b28",
  storageBucket: "zakblogs-c3b28.appspot.com",
  messagingSenderId: "505589707152",
  appId: "1:505589707152:web:2f9b74ea49e727eb950315",
  measurementId: "G-GY7YM8MMXB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

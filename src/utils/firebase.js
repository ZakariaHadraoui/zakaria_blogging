// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "zakaria-vercelplat.firebaseapp.com",
  projectId: "zakaria-vercelplat",
  storageBucket: "zakaria-vercelplat.appspot.com",
  messagingSenderId: "516330875442",
  appId: "1:516330875442:web:4225df37199b35dc47aa2b",
  measurementId: "G-DMGT1WEXK3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

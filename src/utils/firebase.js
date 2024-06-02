// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "zakblogs-c3b28.firebaseapp.com",
  projectId: "zakblogs-c3b28",
  storageBucket: "zakblogs-c3b28.appspot.com",
  messagingSenderId: "505589707152",
  appId: "1:505589707152:web:6080862fba0a93de950315",
  measurementId: "G-R3MBN8GZYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

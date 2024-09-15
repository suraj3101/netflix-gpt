// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCM5RF3WydetZ8WxtubUSEXuYfSUn0FpBU",
  authDomain: "netflixgpt-40b79.firebaseapp.com",
  projectId: "netflixgpt-40b79",
  storageBucket: "netflixgpt-40b79.appspot.com",
  messagingSenderId: "568132714336",
  appId: "1:568132714336:web:1a89663ab25412d8e4a805",
  measurementId: "G-WDLX2NF9MK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
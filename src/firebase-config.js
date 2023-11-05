// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2hneTYovxYU-Nn6NDcrKxeJT2XT49X-M",
  authDomain: "seven-1997a.firebaseapp.com",
  projectId: "seven-1997a",
  storageBucket: "seven-1997a.appspot.com",
  messagingSenderId: "586678004657",
  appId: "1:586678004657:web:8124f108f741ead751ab90",
  measurementId: "G-9GFZL2TGRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
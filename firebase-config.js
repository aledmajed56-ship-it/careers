import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDvJBtIwf1__iRVIuKG7GMef8BlLNdIOog",
  authDomain: "md-recruitment.firebaseapp.com",
  projectId: "md-recruitment",
  storageBucket: "md-recruitment.firebasestorage.app",
  messagingSenderId: "737652908081",
  appId: "1:737652908081:web:3a92df570c60e86d50b510",
  measurementId: "G-25HSRWMW7N"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

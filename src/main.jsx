import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPVa8trbVdbBna8JCVx_5J_O7sNB2h4h8",
  authDomain: "proyectofinalreact-ae6a9.firebaseapp.com",
  projectId: "proyectofinalreact-ae6a9",
  storageBucket: "proyectofinalreact-ae6a9.appspot.com",
  messagingSenderId: "180524159597",
  appId: "1:180524159597:web:c49f75dae2c76e07f26564",
  measurementId: "G-DD7BMPXQTY"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(<App />)

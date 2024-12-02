// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAXYEj5Aeywv7CS_4T-Rb5exEWrk_8uJ2Q",
    authDomain: "liga-deportiva-confluencia.firebaseapp.com",
    projectId: "liga-deportiva-confluencia",
    storageBucket: "liga-deportiva-confluencia.appspot.com",
    messagingSenderId: "1011096216563",
    appId: "1:1011096216563:web:6aa532302fe9337f7fe886",
    measurementId: "G-PPRM44D2H9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { app, db };
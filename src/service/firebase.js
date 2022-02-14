// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDlCHDSXfkrIN3lHAG3ZyT5ImwWbc9ppB0",
    authDomain: "first-project-4fa92.firebaseapp.com",
    databaseURL: "https://first-project-4fa92-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "first-project-4fa92",
    storageBucket: "first-project-4fa92.appspot.com",
    messagingSenderId: "615273346909",
    appId: "1:615273346909:web:338e6f3dd9e7a46034dab4",
    measurementId: "G-X95D330S89"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase

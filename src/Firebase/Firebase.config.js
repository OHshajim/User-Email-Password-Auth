// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAIzfHchXLfQtSaS8yGUoxYHBXidr_O-lc",
    authDomain: "user-email-password-auth-affa2.firebaseapp.com",
    projectId: "user-email-password-auth-affa2",
    storageBucket: "user-email-password-auth-affa2.appspot.com",
    messagingSenderId: "57797876761",
    appId: "1:57797876761:web:218172656a011e560b1e88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth ;
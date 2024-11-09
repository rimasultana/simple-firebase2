// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw6xEEOLX-IgUDz1AAaDNp9r3m9kkIhFQ",
  authDomain: "simple-firebase22-59ab2.firebaseapp.com",
  projectId: "simple-firebase22-59ab2",
  storageBucket: "simple-firebase22-59ab2.firebasestorage.app",
  messagingSenderId: "165148729371",
  appId: "1:165148729371:web:46c82d5cbbe8051e54d8be",
  measurementId: "G-DCHKWPZ87Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
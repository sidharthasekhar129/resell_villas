// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx0LdUelq5adguwcWg3h53g1lpQAoWntk",
  authDomain: "quickride-b009b.firebaseapp.com",
  projectId: "quickride-b009b",
  storageBucket: "quickride-b009b.appspot.com",
  messagingSenderId: "604360255002",
  appId: "1:604360255002:web:0e16892d6ee100a226d3a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

 
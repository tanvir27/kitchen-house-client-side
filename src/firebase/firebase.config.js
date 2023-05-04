// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1xEy8s4wyuO3LMI8GdBQ-PMtd_uuIlVw",
  authDomain: "the-kitchen-house.firebaseapp.com",
  projectId: "the-kitchen-house",
  storageBucket: "the-kitchen-house.appspot.com",
  messagingSenderId: "702144396896",
  appId: "1:702144396896:web:248f5ff86395136da58d05",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIl7_ln73sueyKryUH4CA7iGTO-cc2KSg",
  authDomain: "math-hero-60ab5.firebaseapp.com",
  projectId: "math-hero-60ab5",
  storageBucket: "math-hero-60ab5.appspot.com",
  messagingSenderId: "957295541031",
  appId: "1:957295541031:web:f66921c9868118f5c78702"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGKi8ImF2UcB3SrZeucKPxsIQI5IfbdJE",
  authDomain: "fir-authentication-test-6b43b.firebaseapp.com",
  projectId: "fir-authentication-test-6b43b",
  storageBucket: "fir-authentication-test-6b43b.appspot.com",
  messagingSenderId: "351203361763",
  appId: "1:351203361763:web:965ad5ecd751a7a73ed6d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
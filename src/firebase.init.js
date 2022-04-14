// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0cg_4c1gOzhVbdBgMRq7yK4Gcd46gcuI",
  authDomain: "ema-jhon-simple-ddba5.firebaseapp.com",
  projectId: "ema-jhon-simple-ddba5",
  storageBucket: "ema-jhon-simple-ddba5.appspot.com",
  messagingSenderId: "388248994709",
  appId: "1:388248994709:web:c20b74bf641fef20fe6c9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
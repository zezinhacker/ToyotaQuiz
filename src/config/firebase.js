// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBICtaMnwBPbWS00ULbDEDjmFtQUW8KL3Y",
  authDomain: "toyotta-669bb.firebaseapp.com",
  projectId: "toyotta-669bb",
  storageBucket: "toyotta-669bb.appspot.com",
  messagingSenderId: "437478794798",
  appId: "1:437478794798:web:92c1b2de761bbf5cd0e1bf"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export default { app, db, auth };


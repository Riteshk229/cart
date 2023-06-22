import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDxTvVtLGtvx3mmwhvxq1iehz-k_dS1g5A",
  authDomain: "cart-1072a.firebaseapp.com",
  projectId: "cart-1072a",
  storageBucket: "cart-1072a.appspot.com",
  messagingSenderId: "798182061847",
  appId: "1:798182061847:web:2da8aa9909f6ce0403a952"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = app.firestore()
const auth = firebase.auth();


export { auth, db };
export default firebase;
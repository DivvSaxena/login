// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOEk03-Wr4W87SEc6DtVSB2txr9iE0Sbs",
  authDomain: "next-auth-33422.firebaseapp.com",
  projectId: "next-auth-33422",
  storageBucket: "next-auth-33422.appspot.com",
  messagingSenderId: "818062109837",
  appId: "1:818062109837:web:4ff7053349b224c08306c4"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
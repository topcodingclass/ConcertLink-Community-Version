import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0eBhfhEsUvTFNsXr9QZ4u_DM96u6E0Cs",
  authDomain: "concertlink-915dd.firebaseapp.com",
  projectId: "concertlink-915dd",
  storageBucket: "concertlink-915dd.appspot.com",
  messagingSenderId: "724678359871",
  appId: "1:724678359871:web:77a2538d143447d639b18a",
  measurementId: "G-Q3PPQ945YC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service

export const db = getFirestore(app);
export const auth = getAuth(app);


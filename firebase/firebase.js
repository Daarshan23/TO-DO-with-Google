// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClilOMyQsroPRfz1lUyjdSXySZ4PtkP4Q",
  authDomain: "todo-with-auth1.firebaseapp.com",
  projectId: "todo-with-auth1",
  storageBucket: "todo-with-auth1.appspot.com",
  messagingSenderId: "1031336494197",
  appId: "1:1031336494197:web:2226472ccf6be26c9e243c",
  measurementId: "G-YD51W5SZ5X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
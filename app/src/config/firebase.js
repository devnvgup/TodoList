// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0P9My195J5bt54MAdydTSr7oyI0XJ5mQ",
  authDomain: "todolist-3fc31.firebaseapp.com",
  projectId: "todolist-3fc31",
  storageBucket: "todolist-3fc31.firebasestorage.app",
  messagingSenderId: "357663715667",
  appId: "1:357663715667:web:6b143c8656f6d9d9f2b1a6",
  measurementId: "G-ZQQJRFTXXW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;

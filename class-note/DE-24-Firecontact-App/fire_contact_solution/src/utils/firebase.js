// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2y-sfGPFCvGLvr20qbouSDofmjskoAnQ",
  authDomain: "realtimetadabase.firebaseapp.com",
  databaseURL: "https://realtimetadabase-default-rtdb.firebaseio.com",
  projectId: "realtimetadabase",
  storageBucket: "realtimetadabase.appspot.com",
  messagingSenderId: "342635223280",
  appId: "1:342635223280:web:93c9b6e49e810adeba0a35"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;
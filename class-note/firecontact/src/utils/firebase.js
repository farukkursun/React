// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDybekg94Z5upwBPbr7nnPXfbZt3n0TyTg",
  authDomain: "realtime-dc0d1.firebaseapp.com",
  databaseURL: "https://realtime-dc0d1-default-rtdb.firebaseio.com",
  projectId: "realtime-dc0d1",
  storageBucket: "realtime-dc0d1.appspot.com",
  messagingSenderId: "275867191175",
  appId: "1:275867191175:web:e967dd5e3eb43d8e64f522"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
const database=getDatabase()
export {database}
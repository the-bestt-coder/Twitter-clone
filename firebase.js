// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuwyE2WDsosNpsQoScRYk6IED0zsAYPhs",
  authDomain: "twitter-d0e46.firebaseapp.com",
  projectId: "twitter-d0e46",
  storageBucket: "twitter-d0e46.appspot.com",
  messagingSenderId: "281249599960",
  appId: "1:281249599960:web:2890c4db8783acdf47e2ad"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage' 

const firebaseConfig = {
  apiKey: "AIzaSyC8WO0l3E2qGbYraOMjwnhfbY33XaWWpJg",

  authDomain: "chat-app-68f6b.firebaseapp.com",

  projectId: "chat-app-68f6b",

  storageBucket: "chat-app-68f6b.appspot.com",

  messagingSenderId: "1041818916740",

  appId: "1:1041818916740:web:bbabb97fde64f57b11efd1"

  };
  
  
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()

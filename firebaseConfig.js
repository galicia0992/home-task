// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import {getDatabase} from "firebase/database"
import { getFirestore, getDocs, collection } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxUA-0hPM_NciPHerQwTRypFOHJpsP9sA",
  authDomain: "task-casa.firebaseapp.com",
  databaseURL: "https://task-casa-default-rtdb.firebaseio.com",
  projectId: "task-casa",
  storageBucket: "task-casa.appspot.com",
  messagingSenderId: "133858459916",
  appId: "1:133858459916:web:52024e67645b352ff44929",
  measurementId: "G-ZX1C6G66HG"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const db = getFirestore(FIREBASE_APP)
export const database = getDatabase(FIREBASE_APP)
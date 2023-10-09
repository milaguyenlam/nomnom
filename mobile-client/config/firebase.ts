// Import the functions you need from the SDKs you need
import { FirebaseOptions, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "@firebase/storage";
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
} from "@env";
import * as FirebaseCore from "expo-firebase-core";

const firebaseOptions = FirebaseCore.DEFAULT_APP_OPTIONS;

let firebaseConfig: FirebaseOptions;

if (firebaseOptions) {
  firebaseConfig = {
    apiKey: firebaseOptions.apiKey,
    authDomain: firebaseOptions.authDomain,
    projectId: firebaseOptions.projectId,
    storageBucket: firebaseOptions.storageBucket,
    messagingSenderId: firebaseOptions.messagingSenderId,
    appId: firebaseOptions.appId,
  };
} else {
  firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID,
  };
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase
const firestore = getFirestore(firebaseApp);
const firebaseStorage = getStorage(firebaseApp);

export { firebaseApp, firestore, firebaseStorage };

// firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDeGAPK3nw947fh4ClFil84AjpG7Tgc87Q",
  authDomain: "blog-456f0.firebaseapp.com",
  projectId: "blog-456f0",
  storageBucket: "blog-456f0.firebasestorage.app",
  messagingSenderId: "215055416036",
  appId: "1:215055416036:web:9ac6d95d30b8e6e5234af1",
  measurementId: "G-GXQ8E1E8H0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
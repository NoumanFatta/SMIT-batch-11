import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxngz8KYkHnIFSZ2t9LumHq9rXkv-HJys",
  authDomain: "smit-test-99cd8.firebaseapp.com",
  projectId: "smit-test-99cd8",
  storageBucket: "smit-test-99cd8.appspot.com",
  messagingSenderId: "80363750692",
  appId: "1:80363750692:web:2e13937b74956418dadfb1",
  measurementId: "G-LLR0ET2B1C",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };

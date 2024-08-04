import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxngz8KYkHnIFSZ2t9LumHq9rXkv-HJys",
  authDomain: "smit-test-99cd8.firebaseapp.com",
  projectId: "smit-test-99cd8",
  storageBucket: "smit-test-99cd8.appspot.com",
  messagingSenderId: "80363750692",
  appId: "1:80363750692:web:2e13937b74956418dadfb1",
  measurementId: "G-LLR0ET2B1C",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

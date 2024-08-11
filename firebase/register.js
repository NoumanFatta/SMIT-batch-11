import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendSignInLinkToEmail,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { app } from "./firebase-init.js";

const auth = getAuth(app);

const submitHandler = async (ev) => {
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: "http://localhost:5500/firebase/verify.html",
    // This must be true.
    handleCodeInApp: true,
  };
  try {
    ev.preventDefault();
    const form = new FormData(ev.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // const result = await createUserWithEmailAndPassword(auth, email, password);
    const result = await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
document.querySelector("form").addEventListener("submit", submitHandler);

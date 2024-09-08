import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

import {
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

import { app, db } from "../firebase-init.js";

const auth = getAuth(app);
document.onload = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      location.href = "index.html";
    }
  });
};
const form = document.querySelector("#register-form");
form.addEventListener("submit", async (ev) => {
  ev.preventDefault();
  try {
    const formData = new FormData(ev.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log(user.uid);
    await setDoc(doc(db, "users", user.uid), {
      email,
      password,
    });
    location.href = "index.html";
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
});

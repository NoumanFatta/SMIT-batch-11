import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
  } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
  import { app } from "../firebase-init.js";
  
  const auth = getAuth(app);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      location.href = "index.html";
    }
  });
  const form = document.querySelector("#login-form");
  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    try {
      const formData = new FormData(ev.currentTarget);
      const email = formData.get("email");
      const password = formData.get("password");
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      location.href = "index.html";
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  });
  
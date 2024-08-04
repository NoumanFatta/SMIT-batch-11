import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { app } from "./firebase-init.js";

const auth = getAuth(app);

const email = "email@test.com";
const password = "123456";


createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up
    // const user = userCredential.user;
    // console.log(userCredential)
    // console.log(user)
    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    console.log(error)
    if(error.code === "auth/email-already-in-use"){
      console.log("Email already exits")
    }
    // ..
  });

import React, { useState } from "react";
import "../App.css";
import { auth, db } from "./confic";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

function signup() {
  const navigate = useNavigate();
  const [formdata, setformdata] = useState({
    firstName: "",
    lastname: "",
    email: "",
    password: "",
  });
  const handlingchange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };
  const signupuser = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formdata.email,
        formdata.password
      )
      await setDoc(doc(db, "users", userCredential.user.uid), formdata);
    } catch (e) {
      const errorMessage = e.message;
      console.log(errorMessage);
    }
  };
  return (
    <>
      <div className="login-form" id="Login">
        <div className="text">Signup</div>
        <p className="error"></p>
        <form onSubmit={signupuser}>
          <div className="field">
            <div className="fas bx bxs-envelope" id="emailicon"></div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              id="emaill"
              value={formdata.firstName}
              onChange={handlingchange}
            />
          </div>
          <div className="field">
            <div className="fas bx bxs-envelope" id="emailicon"></div>
            <input
              type="text"
              name="lastname"
              placeholder="Last name"
              id="emaill"
              value={formdata.lastname}
              onChange={handlingchange}
            />
          </div>
          <div className="field">
            <div className="fas bx bxs-envelope" id="emailicon"></div>
            <input
              type="text"
              name="email"
              placeholder="Email or Phone"
              id="emaill"
              value={formdata.email}
              onChange={handlingchange}
            />
          </div>
          <div className="field">
            <div className="fas bx bxs-lock" id="passicon"></div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="passwordl"
              value={formdata.password}
              onChange={handlingchange}
            />
          </div>
          <a href="#" id="forgot">
            forgot password?
          </a>
          <button id="btnl" type="submit">
            signup
          </button>
          <div className="link">
            Not a member?
            <Link to="/login">login </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default signup;

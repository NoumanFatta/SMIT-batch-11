import React from "react";
import "../App.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./confic";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LOGIN = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const loginuser = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password).then((user) => {
        console.log(user);
      });
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className="login-form" id="Login">
        <div className="text">LOGIN</div>
        <p className="error">{}</p>
        <form onSubmit={loginuser}>
          <div className="field">
            <div className="fas bx bxs-envelope" id="emailicon"></div>
            <input
              type="text"
              placeholder="Email or Phone"
              id="emaill"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="field">
            <div className="fas bx bxs-lock" id="passicon"></div>
            <input
              type="password"
              placeholder="Password"
              id="passwordl"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <a href="#" id="forgot">
            forgot password?
          </a>
          <button id="btnl">LOGIN</button>
          <div className="link">
            Not a member?
            <Link to="/signup">signup</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LOGIN;

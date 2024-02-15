import React, { useState } from "react";
import "./Login.css";
import AdminSignInForm from "./AdminSignIn";
import AdminsSignUpForm from "./AdminSignup";
export default function AdminLogin() {
  const [type, setType] = useState("signIn");

  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
      return;
    }
  };

  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");

  return (
    <div className="Login">
      <div className="container-s">
        <div className={containerClass} id="container">
        <AdminSignInForm/>
        <AdminsSignUpForm/>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button className="ghost" id="signIn" onClick={() => handleOnClick("signIn")}>
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, ADMIN!</h1>
                <p>Enter your personal details and start the journey with us</p>
                <button className="ghost " id="signUp" onClick={() => handleOnClick("signUp")}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
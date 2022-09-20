import React from "react";
import { signInWithGoogle } from "../Firebase/config";

import logo from "../assets/logo.png";

const Login = () => {
  return (
    <div className="login">
      <img src={logo} alt="logo" loading="lazy" /> <br />
      <button className="loginBtn" onClick={signInWithGoogle}>
        Sign in with goole
      </button>
    </div>
  );
};

export default Login;

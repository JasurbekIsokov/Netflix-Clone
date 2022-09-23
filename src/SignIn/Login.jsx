import React from "react";
import { signInWithGoogle } from "../Firebase/config";

const Login = () => {
  return (
    <div>
      <button className="loginBtn" onClick={signInWithGoogle}>
        Sign in with goole
      </button>
    </div>
  );
};

export default Login;

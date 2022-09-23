import React from "react";
import { auth } from "../Firebase/config";

const Main = ({ user }) => {
  return (
    <div>
      <img src={user.photoUrl} alt="auth user" className="userImage" />
      <button className="authButton" onClick={() => auth.signOut()}>
        Log out
      </button>
    </div>
  );
};

export default Main;

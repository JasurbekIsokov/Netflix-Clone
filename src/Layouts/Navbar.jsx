<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { auth } from "../Firebase/config";

const Navbar = ({ user }) => {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setFixed(true); // navabr 100 qiymatdan keyin fixed holatga o'tadi
      } else {
        setFixed(false);
      }
    });
  });

  return (
    <div className={`navbar ${fixed && "fixedNav"}`}>
      <button className="authButton" onClick={() => auth.signOut()}>
        <img src={user.photoUrl} alt="auth user" className="userImage" />
=======
import React from "react";
import { auth } from "../Firebase/config";

const Navbar = ({ user }) => {
  return (
    <div>
      <img src={user.photoUrl} alt="auth user" className="userImage" />
      <button className="authButton" onClick={() => auth.signOut()}>
        Log out
>>>>>>> 8b02e5d9226cc9937ffa948a0227f1c7faa9d471
      </button>
    </div>
  );
};

export default Navbar;

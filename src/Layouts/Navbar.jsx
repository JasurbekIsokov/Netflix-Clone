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
      </button>
    </div>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { auth } from "../Firebase/config";

import logo from "../assets/logo.png";

const Navbar = ({ user }) => {
  const [fixed, setFixed] = useState(false); // navabarning fixed bo'ishini ta'minlaydi

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setFixed(true); // navbar 100 qiymatdan keyin fixed holatga o'tadi
      } else {
        setFixed(false); // agar 100 qiymatdan pasaysa fixed hoati yo'qoladi
      }
    });
  });

  return (
    <div className={`navbar ${fixed && "fixedNav"}`}>
      <a href="#" className="brand">
        <img src={logo} alt="logo" />
      </a>

      {/* Buttonning ichiga userning (gmailida turgan) rasmi joylashtirildi */}
      <button className="authButton" onClick={() => auth.signOut()}>
        <img src={user.photoURL} alt="auth user" className="userImage" />
      </button>
    </div>
  );
};

export default Navbar;

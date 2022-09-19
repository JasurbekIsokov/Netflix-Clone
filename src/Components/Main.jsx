import React, { useState, useEffect } from "react";

import Navbar from "../Layouts/Navbar";
import Banner from "./Banner";

const Main = ({ user }) => {
  return (
    <div>
      <Navbar user={user} />
      <Banner />
    </div>
  );
};

export default Main;

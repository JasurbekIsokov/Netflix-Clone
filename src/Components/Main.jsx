import React, { useState, useEffect } from "react";

import Navbar from "../Layouts/Navbar";
import Banner from "./Banner";
import Films from "./Films";

const Main = ({ user }) => {
  return (
    <div>
      <Navbar user={user} />
      <Banner />
      <Films />
    </div>
  );
};

export default Main;

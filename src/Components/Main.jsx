import React, { useState, useEffect } from "react";

import Navbar from "../Layouts/Navbar";

const Main = ({ user }) => {
  return (
    <div>
      <Navbar user={user} />
    </div>
  );
};

export default Main;

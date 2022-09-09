import React, { useState, useEffect } from "react";
import request from "../Baza/request";

import Navbar from "../Layouts/Navbar";
import Banner from "./Banner";
import Films from "./Films";

const Main = ({ user }) => {
  return (
    <div>
      <Navbar user={user} />
      <Banner />
      <Films
        isLargeRow
        title={"NETFLIX ORIGINALS"}
        movie_request={request.fetchNetflixOriginals}
      />
      <Films title={"Trending now"} movie_request={request.fetchTrending} />
    </div>
  );
};

export default Main;

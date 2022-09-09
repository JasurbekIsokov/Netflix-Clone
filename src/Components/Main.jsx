import React, { useState, useEffect } from "react";

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
        movie_request={sorov.fetchNetflixOriginals}
      />
      <Films title={"Trending now"} movie_request={sorov.fetchTrending} />
    </div>
  );
};

export default Main;

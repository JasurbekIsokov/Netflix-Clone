import React, { useState, useEffect } from "react";
import axios from "../Baza/axios";
import request from "../Baza/request";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  const fetchMovie = async () => {
    const responseData = await axios.get(request.fetchNetflixOriginals);
    console.log(responseData);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default Banner;

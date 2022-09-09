import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { Tooltip } from "@mui/material";

import axios from "../Baza/axios";
import request from "../Baza/request";

const Films = ({ title, movie_request, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    const fetchDatas = async () => {
      const responseData = await axios.get(movie_request);
      setMovies(responseData.data.results.slice(0, 6));
    };
    fetchDatas();
  }, [movie_request]);
  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default Films;

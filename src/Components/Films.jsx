import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { Tooltip } from "@mui/material";

import axios from "../Baza/axios";
import request from "../Baza/request";

const Films = ({ title, movie_request, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    // filmlarni olib keladi va setMOvies deegan arrayga beradi
    const fetchDatas = async () => {
      const responseData = await axios.get(movie_request);
      setMovies(responseData.data.results.slice(0, 6));
    };
    fetchDatas();
  }, [movie_request]);

  // filmning teilerini olib keluvchi f-ya
  const fetchMovieTrailer = async (movie) => {
    await axios
      .get("/movie/" + movie?.id.toString() + sorov.trailerQuery)
      .then((responseData) => {
        setTrailerUrl(responseData.data.results[0]?.key);
      })
      .catch((error) => console.error(error));
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      fetchMovieTrailer(movie);
    }
  };

  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default Films;

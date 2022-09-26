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
      .get("/movie/" + movie?.id.toString() + request.trailerQuery)
      .then((responseData) => {
        setTrailerUrl(responseData.data.results[0]?.key);
      })
      .catch((error) => console.error(error));
  };

  // kino bosilganda uning traileri chiqishi uchun f-ya
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      fetchMovieTrailer(movie);
    }
  };

  const options = {
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <div className="filmsCategory">
        <h3>{title}</h3>
        <div className="films">
          {movies.map((movie) => (
            <Tooltip
              title={movie?.original_name || movie?.original_title}
              key={movie.id}
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.original_title}
                onClick={() => handleClick(movie)}
                loading="lazy"
                className={`film ${isLargeRow && "filmPosterLarge"}`}
              />
            </Tooltip>
          ))}
        </div>
        {trailerUrl && (
          <YouTube
            className="ytPlayer"
            videoId={trailerUrl}
            options={options}
          />
        )}
      </div>
    </>
  );
};

export default Films;

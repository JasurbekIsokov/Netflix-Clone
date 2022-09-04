import React, { useState, useEffect } from "react";
import axios from "../Baza/axios";
import request from "../Baza/request";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  // netflixdagi main sectionning elementlarini olib kelish
  const fetchMovie = async () => {
    const responseData = await axios.get(request.fetchNetflixOriginals);
    // console.log(responseData);

    // sayt yangilanganda har doim har xil kino chiqishi uchun random qildik
    setMovie(
      responseData.data.results[
        Math.floor(Math.random() * responseData.data.results.length)
      ]
    );
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <header
      style={{
        backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="main">
        <div className="bannerContents">
          <h1 className="movieTitle">{movie.original_name}</h1>
          <div className="buttons">
            <button className="btn">Play</button>
            <button className="btn">My List</button>
          </div>
          <p className="movieDesc">{movie.overview}</p>
        </div>
      </div>
    </header>
  );
};

export default Banner;

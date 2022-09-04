import axios from "axios";

// tmdb URL i orqali baza yaratamiz
const bazaURL = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default bazaURL;

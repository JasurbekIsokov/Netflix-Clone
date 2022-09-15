import axios from "axios";

const bazaURL = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default bazaURL;

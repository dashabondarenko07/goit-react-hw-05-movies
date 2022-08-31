import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '102f903d69b94d253b628c29b0faaf6d';

export async function getTrendingMovies() {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
}

export async function getSearchMovies(query) {
  const response = await axios.get(
    `search/movie?query=${query}&api_key=${API_KEY}`
  );
  return response.data.results;
}

export async function getMovieById(movieId) {
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
}

export async function getCastsMovieById(movieId) {
  const response = await axios.get(
    `/movie/${movieId}/casts?api_key=${API_KEY}`
  );
  return response.data.cast;
}

export async function getReviewsMovieById(movieId) {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.data.results;
}

import { LIKESURL, MOVIESURL } from './constants.js';

const fetchMovieData = async () => {
  const response = await fetch(MOVIESURL);
  const data = await response.json();
  const des = data.description;
  return des;
};

const fetchLikes = async () => {
  const response = await fetch(LIKESURL);
  const data = await response.json();
  return data;
};

export { fetchMovieData, fetchLikes };
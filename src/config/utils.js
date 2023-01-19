import URL from './constants.js';

const fetchMovieData = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  const des = data.description;
  return des;
};

export default fetchMovieData;
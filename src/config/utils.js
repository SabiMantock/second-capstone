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

// const postLike = async (id) => {
//   const response = await fetch(LIKESURL, {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify({ item_id: id }),
//   });

//   const data = response.text();
//   const { result } = data;
//   return result;
// };

export { fetchMovieData, fetchLikes };
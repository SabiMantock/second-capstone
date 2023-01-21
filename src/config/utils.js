import {
  COMMENTSURL,
  DEETSURL,
  LIKESURL,
  MOVIESURL,
} from './constants.js';

const fetchMovieData = async () => {
  const response = await fetch(MOVIESURL);
  const data = await response.json();
  const des = data.description;
  return des;
};

const fetchMovieDeets = async (id) => {
  const response = await fetch(`${DEETSURL}?tt=${id}`);
  const data = await response.json();
  return data;
};

const fetchLikes = async () => {
  const response = await fetch(LIKESURL);
  const data = await response.json();
  return data;
};

const postLike = async (id) => {
  const response = await fetch(LIKESURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  });

  const data = response.text();
  const { result } = data;
  return result;
};

const postComment = async (comment) => {
  const response = await fetch(COMMENTSURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(comment),
  });
  const data = response.json();
  const { result } = data;
  return result;
};

const getComments = async (id) => {
  const response = await fetch(`${COMMENTSURL}?item_id=${id}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};

const selectMovieDetails = async (id) => {
  const data = await fetchMovieDeets(id);
  return data;
};

export {
  fetchMovieData,
  fetchLikes,
  postLike,
  selectMovieDetails,
  postComment,
  getComments,
};
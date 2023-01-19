const counter = (data) => {
  const movie = document.getElementById('movie');
  movie.innerHTML += `(${data.length})`;
};

export default counter;
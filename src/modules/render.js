import { fetchLikes, fetchMovieData, postLike } from '../config/utils.js';
import like from '../assets/likeIcon.png';
import counter from './counter.js';

const list = document.getElementById('list');
const movie = document.getElementById('movie');

const updateLikes = async () => {
  const data = await fetchLikes();
  data.forEach((item) => {
    const likeCount = document.getElementById(`count-${item.item_id}`);
    if (likeCount) {
      likeCount.innerHTML = `${item.likes}`;
    }
  });
};

const render = async () => {
  const data = await fetchMovieData();
  movie.innerHTML += `(${counter(data)})`;
  counter(data);
  data.forEach(({ '#TITLE': title, '#IMG_POSTER': poster, '#IMDB_ID': id }) => {
    list.innerHTML += `
            <li id=${id} class="list">
                <div class='image-wrapper'>
                    <img src=${poster} alt='movie' class="img"/>
                </div>
                <div class="des">
                    <p>${title}</p>
                    <div class='like'>
                        <div class='likeBtn' id=like-${id}>
                            <img src=${like} alt='like'/>
                        </div>
                        <p id=count-${id}></p>
                    </div>
                </div>
                <div>
                    <button type='button' class='btn'> Comment </button>
                </div>
            </li>

      `;
  });

  updateLikes();

  const btn = document.querySelectorAll('.likeBtn');
  btn.forEach((btn, index) => {
    btn.addEventListener('click', async () => {
      const id = data[index]['#IMDB_ID'];
      await postLike(id);
      updateLikes();
    });
  });
};

export default render;

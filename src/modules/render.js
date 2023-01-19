import { fetchLikes, fetchMovieData } from '../config/utils.js';

const list = document.getElementById('list');

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
  list.innerHTML = '';
  data.forEach(({ '#TITLE': title, '#IMG_POSTER': poster, '#IMDB_ID': id }) => {
    list.innerHTML += `
            <li id=${id} class="list">
                <div class='image-wrapper'>
                    <img src=${poster} alt='movie' class="img"/>
                </div>
                <div class="des">
                    <p>${title}</p>
                    <div class='like'>
                        
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
};

export default render;

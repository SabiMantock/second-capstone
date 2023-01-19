import fetchMovieData from '../config/utils.js';
import like from '../assets/likeIcon.png';

const list = document.getElementById('list');

const render = async () => {
  const data = await fetchMovieData();
  list.innerHTML = '';
  data.forEach(({ '#TITLE': title, '#IMG_POSTER': poster }) => {
    list.innerHTML += `
            <li>
                <div class='image-wrapper'>
                    <img src=${poster} alt='movie' class="img"/>
                </div>
                <div class="des">
                    <p>${title}</p>
                    <div class='like'>
                        <div>
                            <img src=${like} alt='like'/>
                        </div>
                        <p>1 like</p>
                    </div>
                </div>
                <div>
                    <button type='button' class='btn'> Comment </button>
                </div>
            </li>

      `;
  });
};

export default render;
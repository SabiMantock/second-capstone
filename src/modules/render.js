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

  // const popup = document.querySelector('#myModal');
  // const popupContent = document.querySelector('.modal-content');
  // const commentBtns = document.querySelectorAll('.comment-btn');

  // commentBtns.forEach((btn, i) => {
  //   btn.addEventListener('click', () => {
  //     popup.style.display = 'flex';
  //     popupContent.innerHTML = `<div class="popup">
  //             <i class="fa fa-times fa-3x" aria-hidden="true"></i>
  //         <div class="movie-data"><img class="pop-img" src="${poster}" alt="movie"/>
  //         <div><h1>${title}</h1></div>
  //         </div></div>`;

  //     const close = document.querySelector('.fa-times');
  //     close.addEventListener('click', () => {
  //       popup.style.display = 'none';
  //     });
  //   });
  // });
};

export default render;
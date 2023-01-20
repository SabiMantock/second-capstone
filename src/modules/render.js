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
                    <button type='button' class='btn comment-btn'> Comment </button>
                </div>
            </li>
      `;

        
    });

    const popup = document.querySelector('#myModal');
    const popupContent = document.querySelector('.modal-content');
    const commentBtns = document.querySelectorAll('.comment-btn');

    commentBtns.forEach((btn,i) => {
        btn.addEventListener('click', () => {
            popup.style.display = 'flex';
            popupContent.innerHTML = `<div class="popup">
              <i class="fa fa-times fa-3x" aria-hidden="true"></i>
          <div class="movie-data"><img class="pop-img" src="${poster}" alt="movie"/>
          <div><h1>${title}</h1></div>
          </div></div>`;

            const close = document.querySelector('.fa-times');
            close.addEventListener('click', () => {
                popup.style.display = 'none';
            });
        });
    });
};

export default render;
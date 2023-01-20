// eslint-disable-next-line import/no-cycle
import { postComment } from '../config/utils.js';

const popup = document.querySelector('#myModal');
const popupContent = document.querySelector('.modal-content');

const renderCommments = (movie) => {
  popupContent.innerHTML = '';
  popupContent.innerHTML = `
          <div class="popup">
            <i class="fa fa-times fa-3x" aria-hidden="true"></i>
            <div class="movie-data">
              <div class="image-wrapper">
                <img class="img" src="${movie.short.image}" alt="movie"/>
              </div>
              <div>
                <h3>${movie.short.name}</h3>
                <p>${movie.short.description}
              </div>
              
            </div>
            <div class="form-cont">
              <h3>Add Comments</h3>
              <form id='form' action=''>
                <div class='input'>
                  <input type="text" placeholder="Name" id='name'>
                </div>
                <div class='text'>
                  <textarea name="comment" id="comment" cols="30" rows="10" placeholder="your comment here..."></textarea>
                </div>
                <div>
                  <button type="submit" class="btn cBtn">Comment</button>
                </div>
              </form>
            </div>

          </div>

`;
  popup.style.display = 'block';
  const close = document.querySelector('.fa-times');
  close.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  const form = document.getElementById('form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    if (name !== '' || comment !== '') {
      postComment({
        item_id: movie.imdbId,
        username: name,
        comment,
      });
    }
    form.reset();
  });
};

export default renderCommments;
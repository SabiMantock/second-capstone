const popup = document.querySelector('#myModal');
const popupContent = document.querySelector('.modal-content');

const renderCommments = (movie) => {
  popupContent.innerHTML = '';
  popupContent.innerHTML = `
        <div class="popup">
            <i class="fa fa-times fa-3x" aria-hidden="true"></i>
            <div class="movie-data">
                <img class="pop-img" src="${movie['#IMG_POSTER']}" alt="movie"/>
                <div>
                    <h1>${movie['#TITLE']}</h1>
                </div>
            </div>
            <div class="form-cont">
            <form>
            <input type="text" placeholder="Name">
            <textarea name="comment" id="" cols="30" rows="10" placeholder="your comment here..."></textarea>
            <button type="submit">Comment</button>
            </form>
            </div>
        </div>
`;
  popup.style.display = 'block';
  const close = document.querySelector('.fa-times');
  close.addEventListener('click', () => {
    popup.style.display = 'none';
  });
};

export default renderCommments;
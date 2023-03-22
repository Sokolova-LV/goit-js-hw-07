import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(createImageCardsMarkup(galleryItems));

const cardContainer = document.querySelector('.js-gallery');
const cardsMarkup = createImageCardsMarkup(galleryItems);

cardContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createImageCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
    `;
    }).join('');
}

/*const lightbox  = new SimpleLightbox('.js-gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
});*/
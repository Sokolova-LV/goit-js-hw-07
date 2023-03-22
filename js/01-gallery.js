import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(createImageCardsMarkup(galleryItems));

const cardContainer = document.querySelector('.js-gallery');
const cardsMarkup = createImageCardsMarkup(galleryItems);

cardContainer.insertAdjacentHTML('beforeend', cardsMarkup);

cardContainer.addEventListener('click', onCardContainerClick);

function createImageCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
    }).join('');
}

function onCardContainerClick(evt) {
    evt.preventDefault();

    const datasetSource = evt.target.dataset.source;
    if (!datasetSource) {
        return;
    }
    modal.element().querySelector('img').src = datasetSource;
    modal.show();
}

const modal = basicLightbox.create(
    `
    <img width="1280" height="auto" src="">`,
    {
        onShow: (modal) => {
            window.addEventListener('keydown', onEscBtnPress);
        },
        onClose: (modal) => {
            window.removeEventListener('keydown', onEscBtnPress);
        },
    }
)

function onEscBtnPress(evt) {
    if(evt.code !=='Escape') {
        return;
    }
    modal.close();
}
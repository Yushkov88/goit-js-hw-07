import { galleryItems } from './gallery-items.js';
// Change code below this line

const modal = basicLightbox.create(`
    <img src="" alt="">
`);
const modalImage = modal.element().querySelector('img');
const gallery = document.querySelector('.gallery');

function renderGallery() {
  const galleryItemsHtml = galleryItems.map(
    ({ original, preview, description }) => {
      const galleryItem = `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="large-image.jpg"
            alt="${description}"
          />
        </a>
      </div>
    `;

      return galleryItem;
    },
  );

  gallery.insertAdjacentHTML('beforeend', galleryItemsHtml.join(''));
}

gallery.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  modalImage.src = event.target.parentNode.href;
  modalImage.alt = event.target.alt;
  modal.show();
});

renderGallery();

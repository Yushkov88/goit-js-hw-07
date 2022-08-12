import { galleryItems } from './gallery-items.js';
// Change code below this line

const modal = basicLightbox.create(`
    <img src="" alt="">
`);
const modalImage = modal.element().querySelector('img');
const gallery = document.querySelector('.gallery');

function renderGallery() {
  const galleryItemsHtml = galleryItems.reduce(
    (acc, { original, preview, description }) => {
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

      return acc + galleryItem;
    },
    '',
  );

  gallery.insertAdjacentHTML('beforeend', galleryItemsHtml);
}

gallery.addEventListener('click', event => {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  event.preventDefault();

  modalImage.src = event.target.parentNode.href;
  modalImage.alt = event.target.alt;
  modal.show();
});

renderGallery();

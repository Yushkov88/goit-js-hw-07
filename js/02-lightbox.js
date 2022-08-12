import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function renderGallery() {
  const galleryItemsHtml = galleryItems.reduce(
    (acc, { description, original, preview }) => {
      const galleryItem = `      
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>      
    `;

      return acc + galleryItem;
    },
    '',
  );

  gallery.insertAdjacentHTML('beforeend', galleryItemsHtml);
}

renderGallery();

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

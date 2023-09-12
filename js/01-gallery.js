import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const markup = galleryItems.map(link => `
  <li class="gallery__item">
    <a class="gallery__link" href="${link.largeImage}">
      <img
        class="gallery__image"
        src="${link.smallImage}"
        data-source="${link.largeImage}"
        alt="${link.imageDescription}"
        lodaing = "lazy"
      />
    </a>
  </li>
`).join('');

gallery.insertAdjacentHTML('beforeend', markup);

console.log(galleryItems);

markup.addEventListener('click', (e))
  if (e.target.nodeName === 'IMG') {
    const largeImage = e.target.dataset.source;
    const instance = markup;

    instance.show();
  }


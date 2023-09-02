import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const elements = {
    container: document.querySelector(".gallery"),
  };
  elements.container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
  elements.container.addEventListener("click", handlerGalleryClick);
  function createMarkup(arr) {
    return arr.map(
      ({ preview, original, description }) => `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
   </li>`
    ).join('');
  }
  function handlerGalleryClick(evt) {
      evt.preventDefault()
    if (evt.currentTarget === evt.target) {
      return;
    }

    const instance =new SimpleLightbox('.gallery a', {
    captionsData :'alt',
    captionDelay :250,  
    });
    
   
    // instance.show
  }
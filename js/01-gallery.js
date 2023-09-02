import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const elements = {
  container: document.querySelector(".gallery"),
};
elements.container.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
elements.container.addEventListener("click", handlerGalleryClick);
function createMarkup(arr) {
  return arr.map(
    ({ preview, original, description }) => `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
  ).join('');
}
function handlerGalleryClick(evt) {
    evt.preventDefault()
  if (evt.currentTarget === evt.target) {
    return;
  }
//   console.log(evt.target, evt.currentTarget);
//   const currentPhoto = evt.target.clo('.gallery_item');
  const originalPhoto =evt.target.dataset.source;
  
  const photo = galleryItems.find(({original}) => original === originalPhoto)
//   console.log(originalPhoto)
//   console.log(photo)
  const instance = basicLightbox.create(`
  
     <img src="${photo.original}" alt="${photo.description}" />
  
`)
instance.show()
}

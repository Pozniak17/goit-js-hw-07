import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

//* 1.Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

//* 2.Реалізація делегування на div.gallery і отримання url великого зображення.

const divRef = document.querySelector("div");
console.log(divRef);

function createItemMarkup(items) {
  return items
    .map(
      (item) => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
    )
    .join("");
}

const newTest = createItemMarkup(galleryItems);

divRef.innerHTML = newTest;

// console.log(createItemMarkup(galleryItems));

import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

//*✅ 1.Створення і рендер розмітки

//* 2.Реалізація делегування на div.gallery і отримання url великого зображення.
const divRef = document.querySelector(".gallery");
console.log(divRef);

//* отримання url великого зображення.
const originalImgRef = galleryItems.forEach((item) => item.original);

function createGallaryMarkup(items) {
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

const addGallaryMarkup = createGallaryMarkup(galleryItems);

divRef.innerHTML = addGallaryMarkup;

divRef.addEventListener("click", onImageClick);

//*✅ Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку. Заборони цю поведінку за замовчуванням.
function onImageClick(evt) {
  //! заборона стандартних дій, щоб браузер не відкривав картинку по посиланню
  blockStandartAction(evt);
  //! перевіряємо, якщо не картинка, виходимо

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  //! в протилежному випадку вик. бібліотеку basic lightbox
  const instance = basicLightbox.create(`
      <img src="${evt.target.dataset.source}" width="800" height="600">
  `);
  instance.show();

  //! Закриття
  divRef.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}

//* Розбиваю на функції
function blockStandartAction(evt) {
  evt.preventDefault();
}

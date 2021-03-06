'use strict';

// Создай галерею с возможностью клика по ее элементам и просмотра полноразмерного изображения в модальном окне. 

// Разбей задание на несколько подзадач:

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data-action="close-modal"].
// Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.
// Стартовые файлы
// В папке src ты найдешь стартовые файлы проекта с базовой разметкой и готовыми стилями.
// В файле gallery-items.js есть массив объектов содержащих информацию о изображениях: маленькое изображение, оригинальное и описание.
// Разметка элемента галереи
// Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе img, и указываться в href ссылки (это необходимо для доступности).

// <li class="gallery__item">
//   <a
//     class="gallery__link"
//     href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//   >
//     <img
//       class="gallery__image"
//       src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
//       data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//       alt="Tulips"
//     />
//   </a>
// </li>
// Дополнительно
// Следующий функционал не обязателен при сдаче задания, но будет хорошей практикой по работе с событиями.

// Закрытие модального окна по клику на div.lightbox__overlay.
// Закрытие модального окна по нажатию клавиши ESC.
// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".


const images = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/hokkaido-4202825__340.jpg ',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/hokkaido-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/view-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/view-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];

  const openModal = document.querySelector('.lightbox');//модальное окно
  const closeModalBtn = document.querySelector('button[data-action="close-lightbox"]');// кнопка закрытия модального окна
  const lightboxContent = document.querySelector('.lightbox__content');// модальное окно обертка image
  const lightboxImg = document.querySelector('.lightbox__image');// image в модальном окне


// создаем разметку галереи
const galleryItems = document.querySelector('.gallery');//доступ к ul, чтобы создать li
let items = images.map(img => {//создаем li динамически
  galleryItems.insertAdjacentHTML('beforeend', `<li class="gallery__item">
     <a
       class="gallery__link"
       href="${img.original}">
       <img
         class="gallery__image"
         src="${img.preview}"
         data-source="${img.original}"
         alt="${img.description}"
       />
     </a>
   </li>`)
  return img;
  })

  galleryItems.addEventListener('click', openLightbox);// слушатель на открытие модального окна
  closeModalBtn.addEventListener('click', closeLightbox);// слушатель на закрытие модального окна
  lightboxContent.addEventListener('click', overlay);// слушатель на клики по backdrop(overlay)


// отображаем полноразмерноe изображениe
function openLightbox(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }
  lightboxImg.src = e.target.dataset.source;// переопределение ссылки
  lightboxImg.alt = e.target.alt; // переопределение атрибута
  // Для того чтобы открыть, необходимо добавить на div.lightbox CSS-класс is-open
  openModal.classList.add('is-open'); 
  window.addEventListener('keydown', handleKeyPress);// слушатель Escape вешается на window, и только в функцию 
  // открытия модалки, так как если повесим рядом во всеми слушателями, то будут слушаться все события до открытия окна, 
  // а это нам не нужно, это будет перегружать память, 
}

// закрываем модальное окно
function closeLightbox() {
  openModal.classList.remove('is-open');
  //Очистка значения атрибута src элемента img.lightbox__image. 
  // Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.
  lightboxImg.src = '';
  lightboxImg.alt = '';
  window.removeEventListener('keydown', handleKeyPress);
}

function overlay(e) {
  if (e.target !== e.currentTarget) {
    return;
  }
  closeLightbox();
}

function handleKeyPress(event) {
  if (event.code !== 'Escape') {
    return;
  }
  closeLightbox();
}
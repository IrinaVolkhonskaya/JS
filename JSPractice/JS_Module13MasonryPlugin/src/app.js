import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import makeGridItem from './makeGridItem';

import './styles.css';

const masonryInstance = new Masonry('#gallery', {
  columnWidth: '.grid-sizer',
  itemSelector: '.grid-item',
  gutter: 10,
  percentPosition: true,
  transitionDuration: '0.3s',
});

imagesLoaded('#gallery').on(
  'progress',
  masonryInstance.layout.bind(masonryInstance),
);

fetch(
  'https://pixabay.com/api/?key=15783358-ef34fe514f99880e0f4ac92e7&q=cat&image_type=photo',
)
  .then(res => res.json())
  .then(({ hits }) => {
    //webformatURL
    const elements = hits.map(hit => makeGridItem(hit.webformatURL));

    //добавим в DOM
    document.querySelector('#gallery').append(...elements);

    //Добавить к masonry под слежение
    masonryInstance.addItems(elements);

    imagesLoaded('#gallery').on(
      'progress',
      masonryInstance.layout.bind(masonryInstance),
    );
  });

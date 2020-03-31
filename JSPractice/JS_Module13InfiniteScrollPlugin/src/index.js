import InfiniteScroll from 'infinite-scroll';
import postTemplate from './templates/post.hbs'
import './styles.css';

const feedContainer = document.querySelector('#feed');
const infScrollInstance = new InfiniteScroll( feedContainer, { //cоздаем экземпляр
  responseType: 'text', // преобразуем в JSON
  history: false, 
  path () {
      return `https://jsonplaceholder.typicode.com/posts/?_page=${this.pageIndex}`;
    },
});

infScrollInstance.on('load', (response) => {
    // console.log(response);
    const posts = JSON.parse(response);
    console.log(posts);

    const markUp = posts.map(post =>postTemplate(post)).join('');
    
    const proxyEl = document.createElement('div');
    proxyEl.innerHTML = markUp;

    const parsedItems = proxyEl.querySelectorAll('.item');
    // console.log(proxyEl);
    console.log(parsedItems);

    infScrollInstance.appendItems(parsedItems);
    // console.log(markUp);
});

infScrollInstance.loadNextPage();

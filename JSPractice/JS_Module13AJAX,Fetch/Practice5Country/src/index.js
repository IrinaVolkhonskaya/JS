import fetchArticles from './static/fetchCountries.js'; //данные с http запроса
import countryListItemTemplate from './templates/countries-only.hbs'; //шаблон списка городов
import articleListItemsTemplate from './templates/article-list-items.hbs'; // шаблон данных о городах
import PNotify from 'pnotify/dist/es/PNotify.js'; // плагин оповещения
import './styles.css';

const debounce = require('lodash.debounce');

const searchForm = document.getElementById('country-js');
const articleList = document.getElementById('article-list'); //куда будем набивать шаблоны городов из hbs
const articleSelect = document.getElementById('countries-list'); // куда будем добавлять список городов под инпутом

searchForm.addEventListener('input', debounce(inputAdd, 500));

function inputAdd(event) {
  const searchQuery = event.target.value;
  clearCountries();
  //   console.log(searchQuery);
  fetchArticles(searchQuery).then(data => {
    // console.log(data);
    // console.log(data.length);

    if (data.length > 10) {
      PNotify.alert({
        title: 'Запрос не найден!',
        text: 'Пожалуйста, введите более точный запрос.',
      });
    } else if (data.length <= 10 && data.length >= 2) {
      clearCountries();
      return insertCountriesMarkup(data);
    } else {
      clearCountries();
      const markUp = buildListItemsMarkUp(data);
      insertListItems(markUp);
    }
  });
}

function insertListItems(items) {
  articleList.insertAdjacentHTML('beforeend', items);
}

function insertCountriesMarkup(countries) {
  const markup = countries
    .map(country => {
      return countryListItemTemplate(country);
    })
    .join(' ');
  articleSelect.insertAdjacentHTML('beforeend', markup);
}

function buildListItemsMarkUp(items) {
  return articleListItemsTemplate(items);
}

function clearCountries() {
  articleSelect.innerHTML = '';
  articleList.innerHTML = '';
}

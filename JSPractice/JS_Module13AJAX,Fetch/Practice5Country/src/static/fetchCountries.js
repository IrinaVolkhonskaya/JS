// const baseUrl = `https://restcountries.eu/rest/v2/name`;

export default function fetchCountries(query) { 
     //возвращает промис с массивом стран, результат запроса к API.
  const options = {
    Accept: 'application/json',
  };

  return fetch(`https://restcountries.eu/rest/v2/name/${query}`, options)
  .then(response => response.json()); //ставим return перед fetch (его результат - промис), для того чтобы в файле index.js иметь доступ к данным для отрисовки данных. В файле index.js мы импортируем промис с полученными данными (data).
};

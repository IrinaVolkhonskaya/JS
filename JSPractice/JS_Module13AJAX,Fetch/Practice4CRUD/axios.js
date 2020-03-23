//библиотека AXIOS

axios.defaults.baseURL = 'http://localhost4040';//данная запись позволяет не писатьв каждом запросе полный адрес, т.о. сокращается код
axios.defaults.headers.post['Content-Type'] = 'application/json'; //данная запись добавляет в каждый post-запрос -> 'Content-Type' = 'application/json'
axios.defaults.headers.get['Accept'] = 'application/json';//данная запись при каждом get-запросе говорит,что принимает данные от бекенда только в формате 'application/json'
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;//данная запись позволяет при ВСЕХ видах запросов добавлять авторизацию.

const fetchUsers = () => {
    return axios
    .get('/users')
    .then(console.log)//то что ответил бекенд, как ответ на запрос
    .catch(console.warn);
};

const fetchUserById = userId => {
    return axios
    .get(`/users/${userId}`)
    .then(console.log)
    .catch(console.warn);
};

//POST - создание
const addUser = (name, email) => {
    const url = '/users';
    const body = { name, email };
    return axios
    .post(url,body)
    .then(console.log)
    .catch(console.warn);
};

//DELETE - удаление

const deleteUser = userId => {
    const url = `/users/${userId}`;
    
    return axios
    .delete(url)
    .then(console.log)
    .catch(console.warn);
};

//PATCH - изменит только то, что указано в переданных данных

const updateUser = (userId, update) => {
    const url = `/users/${userId}`;
    
    return axios.patch (url, update)
    .then(console.log)
    .catch(console.warn);
  };
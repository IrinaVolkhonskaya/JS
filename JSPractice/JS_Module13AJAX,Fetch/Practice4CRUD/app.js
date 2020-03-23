//GET - чтение
const fetchUsers = () => {
	return fetch('http://localhost:4040/users')
		.then(res => res.json())
		.then(console.log)
		.catch(console.warn);
};

const fetchUsersById = userId => {
	return fetch('http://localhost:4040/users/${userId}')
		.then(res => res.json())
		.then(console.log)
		.catch(console.warn);
};

//POST - создание
const addUser = (name, email) => {
	const url = 'http://localhost:4040/users';
	const options = {
		method: 'POST',
		headers: {
            'Content-Type': 'application/json',//отправляем данные в формате json
             Accept: 'application/json' //принимаем от бекенда ответ только в формате json
		},
		body: JSON.stringify({ name, email })
	};

	return fetch(url, options)
		.then(res => res.json())
		.then(console.log)// сюда уже придет user с добавленным с бекенда id!
		.catch(console.warn);
};


//DELETE - удаление

const deleteUser = userId => {
    const url = `http://localhost:4040/users/${userId}`;
    const options = {
        method: 'DELETE'
    };

    return fetch(url, options)
    .then(res => res.json())
    .then(console.log)
    .catch(console.warn);
};

  //PUT - подменяет полностью объект на то,что мы передаем на изменение

  //PATCH - изменит только то, что указано в переданных данных

  const updateUser = (userId, update) => {
    const url = `http://localhost:4040/users/${userId}`;
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(update)
    }
    return fetch(url, options)
    .then(res => res.json())
    .then(console.log)
    .catch(console.warn);
  };
//Геолокация на промисах

const getCurrentPosition = () => {
	const options = {
		timeout: 5000
	};

	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject, options);
	});
};

getCurrentPosition()
	.then(location => {
		console.log(location);
	})
	.catch(error => {
		console.log(error);
	});

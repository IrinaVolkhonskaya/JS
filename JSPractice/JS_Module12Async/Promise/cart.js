const cart = {
	items: [
		{ id: 123123123123, name: 'Бинт' },
		{ id: 475660606, name: 'Аптечка' }
	],
	add(itemName) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const item = {
					id: Date.now(),
					name: itemName
				};

				this.items.push(item);

				resolve(item);
			}, 2000);
		});
	},
	remove(id) {
		return new Promise(resolve => {
			setTimeout(() => {
				this.items = this.items.filter(item => item.id !== id);

				resolve(id);
			}, 300);
		});
	}
};

cart
	.add('Глюкоза')
	.then(addedItem => {
		updateUIAfterAdd(addedItem);
	})
	.catch(error => {
		console.log(error);
	});

cart
	.remove(475660606)
	.then(id => {
		updateUIAfterRemove(id);
	})
	.catch(error => {
		console.log(error);
	});

function updateUIAfterAdd(item) {
	console.log(`Updating with item id ${item.id}`);
}

function updateUIAfterRemove(id) {
	console.log(`Removing item with id ${id}`);
}

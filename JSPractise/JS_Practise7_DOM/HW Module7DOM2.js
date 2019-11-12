"use strict";
// Задание 2
// В HTML есть пустой список ul#ingredients.

/* <ul id="ingredients"></ul> */
// В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//  после чего вставит все li за одну операцию в список ul.ingredients.
//  Для создания DOM-узлов используй document.createElement().
// debugger

const ulElement = document.getElementById('ingredients'); 
let item;

  let frag = document.createDocumentFragment();
	for (var i = 0; i < ingredients.length; i++) {
		item = document.createElement('li');
		item.textContent = ingredients[i];
    frag.appendChild(item);
	}

	ulElement.appendChild(frag);
  


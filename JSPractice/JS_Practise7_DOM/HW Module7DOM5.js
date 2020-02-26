"use strict";
// DONE!!!    Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. Если инпут пустой, 
// в спане должна отображаться строка 'незнакомец'.

/* <input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1> */

const inputName = document.getElementById("name-input");// <input type="text" placeholder="Ваше имя?" id="name-input">
const outputName = document.getElementById("name-output");// <span id="name-output">незнакомец</span>

// ------------------------вариант 1----------------------
function inputAdd(event) {
	if (inputName.value === '') {
		outputName.textContent;
	} else {
        outputName.textContent = event.target.value;
	}
}
// -------------------вариант 2------- double destructurization--------------------------
// function inputAdd({target: {value}}) { 
//     // const { target } = event
//     // const { value } = target 
//     console.log(value)
// 	if (inputName.value === '') {
// 		outputName.textContent;
// 	} else {
//         outputName.textContent = value;
// 	}
// }
inputName.addEventListener('input', inputAdd);
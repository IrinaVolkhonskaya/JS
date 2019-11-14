"use strict";

// Задание 1

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Document</title>
// </head>
// <body>
//     <!-- <h1>asdsad</h1> -->
//     <ul id="categories">
//         <li class="item">
//           <h2>Животные</h2>

//           <ul>
//             <li>Кот</li>
//             <li>Хомяк</li>
//             <li>Лошадь</li>
//             <li>Попугай</li>
//           </ul>
//         </li>
//         <li class="item">
//           <h2>Продукты</h2>

//           <ul>
//             <li>Хлеб</li>
//             <li>Петрушка</li>
//             <li>Творог</li>
//           </ul>
//         </li>
//         <li class="item">
//           <h2>Технологии</h2>

//           <ul>
//             <li>HTML</li>
//             <li>CSS</li>
//             <li>JavaScript</li>
//             <li>React</li>
//             <li>Node</li>
//           </ul>
//         </li>
//       </ul>
//       <script src="Module7DOM/HW Module7DOM1.js"></script>
// </body>
// </html>


// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. 
// Получится 'В списке 3 категории.'.
// debugger
const items = document.querySelectorAll('li.item');
console.log(items);
console.log(`В списке ${items.length} категории`);


// Для каждого элемента li.item в списке ul#categories, 
// найдет и выведет в консоль текст заголовка элемента (тега h2) 
// и количество элементов в категории (всех вложенных в него элементов li).

const count = document.querySelectorAll(`li.item ul`);// псевдомассив
const arr = Array.from(count); //в массив
console.log(arr)

arr.map((item, i) => console.log( `Категория: ${document.querySelectorAll('li.item > h2')[i].textContent} содержит: ${item.children.length} элемента`))

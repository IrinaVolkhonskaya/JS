"use strict";
/*  */

const usersByDay = [4, 2, 1, 3];
console.log(usersByDay);

let currentIndex = 0;
let minValue = usersByDay[currentIndex];// minValue = usersByDay[0] //; minValue = 4

for (let j = currentIndex + 1; j <= usersByDay.length - 1; j++) {
  if (usersByDay[j] < minValue) //if (2 < 4)
  { 
    minValue = usersByDay[j];// minValue = 2 // usersByDay[j]=2
    let swap = usersByDay[currentIndex];// var swap = 4
    usersByDay[currentIndex] = minValue;//   usersByDay[currentIndex] = 2
    usersByDay[j] = swap; // usersByDay[j] = 4
    console.log('Меняю местами ' + swap + ' и ' + minValue);
    console.log('Массив сейчас: ' + usersByDay);
  }
}
console.log('Минимальный элемент: ' + minValue);

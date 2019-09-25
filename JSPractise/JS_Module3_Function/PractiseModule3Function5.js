"use strict";

/*  
  Напиши фукнцию findLongestWord(str), которая принимает 
  параметром произвольную строку и возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы, символы букв и цифр!
*/

function findLongestWord(str) {
  let longestWord = 0;
  let stringArray;
  let word;
  
  stringArray = str.split(" ");
  // console.log (Array.isArray(stringArray));
  console.log(stringArray);
  for (let i=0; i < stringArray.length; i++) {
     if (stringArray[i].length > longestWord){
       longestWord = stringArray[i].length;
       word = stringArray[i];
     }
  }
  return word;
};


// Вызовы функции для проверки
console.log(
  findLongestWord("The quick brown fox jumped over the lazy dog")
); // 'jumped'

console.log(
  findLongestWord("Google do a roll")
); // 'Google'

console.log(
  findLongestWord("May the force be with you")
); // 'force'




"use strict";

/*
  Напиши скрипт, который проверяет произвольную строку 
  в переменной message и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

const message = "May the force be with you";
let newMessage = message.split(" "); //["May", "the", "force", "be", "with", "you"]
let longestWord;
let lengthWord = 0;

for(let i = 0; i < newMessage.length; i++) {
  console.log(newMessage[i].length);
      if(newMessage[i].length > lengthWord){ //3 > 0 true// 3>3 false // 5>3 true // 2 >5 false//4>5 false// 3> 5 false
        lengthWord = newMessage[i].length; //lengthWord = 3 // ...// 5
        longestWord = newMessage[i]; // force
    } 
}
console.log(longestWord);

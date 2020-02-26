"use strict";

/* Done!!! Задание 4
Напиши класс StringBuilder. На вход он получает один параметр - строку, 
которую записывает в свойство _value.

Добавь классу следующий функционал:

Геттер value - возвращает текущее значение поля _value
Метод append(str) - получает парaметр str (строку) и добавляет ее в конец _value
Метод prepend(str) - получает парaметр str (строку) и добавляет ее в начало _value
Метод pad(str) - получает парaметр str (строку) и добавляет ее в начало и в конец _value */

// debugger
class StringBuilder {
    constructor(val){ 
      this._value = val; //.
    }
    get value () {
        return this._value;// неизменное свойство
    }

    append(str) {
        this._value = `${this._value}${str}`;
    }
    prepend(str) {  
        this._value = `${str}${this._value}`
    }
    pad(str) {
        this._value = `${str}${this._value}${str}`;
    }
    
}


const builder = new StringBuilder('.'); // this._value = '.'


builder.append('^'); // this._value = '.^'
console.log(builder.value); // '.^' 

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
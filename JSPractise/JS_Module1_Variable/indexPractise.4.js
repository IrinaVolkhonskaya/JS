"use strict";

const value = Number.parseInt(Math.random() * 100);
let type;

if (value % 2 === 0) {
  type = "even";
} else {
  type = "odd";
}

console.log(`${value} is ${type}`);

"use strict";
/*  Я провожу тренировки и хочу понять, пройду ли квалификацию.
В течение тренировки я делаю несколько прыжков и собираю длины прыжков в массив attempts.
Квалификационное значение хранится в переменной qualificationDistance.
Программа должна выбрать три лучших прыжка, а затем посчитать среднее значение этих трёх прыжков и записать его в переменную averageBest.
Если среднее от лучших трёх прыжков больше квалификационного значения, то я прошёл квалификацию и переменная qualified должна содержать true. Если квалификация не пройдена, то в qualified должно быть false.
*/
const qualificationDistance = 200;
let attempts = [120, 150, 160, 201, 203, 180, 202];
let qualified = false;
let averageBest = 0;

  for (i = 0; i <= attempts.length - 2; i++) {
  let minValue = attempts[i];

  for (j = i + 1; j <= attempts.length - 1; j++) {
    if (attempts[j] < minValue) {
      minValue = attempts[j];
      let swap = attempts[i];
      attempts[i] = minValue;
      attempts[j] = swap;
    }
  }
}   
    averageBest = ((attempts[attempts.length-1]) + (attempts[attempts.length-2])+ (attempts[attempts.length-3]))/3;
    
    if( averageBest > qualificationDistance) {
      qualified = true;
      } else {
        qualified = false;
        }
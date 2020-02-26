"use strict";

const country = "Индия";
let price = "80 кредитов";

switch (country) {
  case "Индия":
    console.log(`Доставка в ${country} будет стоить 90 кредитов`);
    break;
  case "Китай":
    console.log(`Доставка в ${country} будет стоить 180 кредитов`);
    break;
  case "Австралия":
    console.log(`Доставка в ${country} будет стоить 60 кредитов`);
    break;
  case "Южная Америка":
    console.log(`Доставка в ${country} будет стоить 45 кредитов`);
    break;
  case "Ямайка":
    console.log(`Доставка в ${country} будет стоить 345 кредитов`);
    break;
  default:
    console.log("В вашей стране доставка не доступна");
}

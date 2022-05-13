const daysOfTheWeek = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado"
];

function getDay(num) {
  if(num >= 0 && num <= 6) {
    return daysOfTheWeek[num];
  }
  return "Dia Inválido!";
}

const DAY_CODE_TO_TEST = 0;
const EXPECTED_DAY = "Domingo"
console.log(`Day Code: ${DAY_CODE_TO_TEST}`);
console.log(`Day of the Week Expected: ${EXPECTED_DAY}`);
console.log(`Day of the Week Obtained: ${getDay(DAY_CODE_TO_TEST)}`);

// const currentDayCode = new Date().getDay();
// console.log("Current Day Code:", currentDayCode);
// console.log("Day of the Week:", getDay(currentDayCode));

// console.log("Erroneus Day of the Week:", getDay(100));
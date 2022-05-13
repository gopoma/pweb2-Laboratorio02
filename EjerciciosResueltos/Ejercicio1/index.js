// function arrayGenerator(n, min, max) {
//   let a = [];
//   for(let x = 0; x < n; x++) {
//     a.push(Math.floor(Math.random() * (max - min) + min));
//   }
//   return a;
// }

function arrayGenerator(n, min, max) {
  return new Array(n).fill(0).map(function () {
      return Math.floor(Math.random() * (max - min) + min);
  });
}

const randomArray = arrayGenerator(5, 1, 10);
console.log(randomArray);
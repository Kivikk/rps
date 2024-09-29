// function rps(max) {
//   return Math.floor(Math.random() * max);
// }

// console.log(rps(3));

const selection = ['rock', 'paper', 'stone'];

function rps(max) {
  const randomNum = Math.floor(Math.random() * max);
  return selection[randomNum];
}
console.log(rps(3));

const userMove = process.argv[2];



// function rps(max) {
//   return Math.floor(Math.random() * max);
// }

// console.log(rps(3));

// function rps(max) {
//   const randomNum = Math.floor(Math.random() * max);
//   return selection[randomNum];
// }
// console.log(rps(3));

const selection = ['rock', 'paper', 'scissor'];
// Alternative: const computerMove = selection[Math.floor (Math.random() * 3)];
const computerMove = selection[Math.floor (Math.random() * selection.length)];
// alternative < const userMove =process.argv[2]; > 
const userMove = process.argv.slice(2).join('');

function setWinner(user, computer) {
  if(user === computer){
    return "draw :-|"
  } else if(
    (user === 'rock' && computer === 'scissor') ||
    (user === 'scissor' && computer === 'paper') ||
    (user === 'paper' && computer === 'rock')
  ){
    return 'You win :-(';
  } else {
    return 'Loser :-)';
  }
}

console.log(`User chose: ${userMove}`);
console.log(`Computer chose: ${computerMove}`);
console.log(setWinner(userMove, computerMove));




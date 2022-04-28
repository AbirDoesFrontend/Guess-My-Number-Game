'use strict';
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
 document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
 const guess = Number(document.querySelector('.guess').value);

 // When there is no input
 if (!guess) {
  displayMessage("⛔ No Number!");
 }

 // When player wins
 else if (guess === number) {
  displayMessage("🎉 Correct Number!");

  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.number').textContent = number;

  if (score > highscore) {
   highscore = score;
   document.querySelector('.highscore').textContent = highscore;
  }
 } else if (guess !== number) {
  if (score > 1) {
   displayMessage(guess > number ? "📈 Too High!" : "📉 Too Low!");
   score--;
   document.querySelector('.score').textContent = score;
  } else {
   displayMessage("😢 You Lost The Game!!");
  }
 }
})

document.querySelector('.again').addEventListener('click', function () {
 score = 20;
 document.querySelector('.score').textContent = score;
 document.querySelector('body').style.backgroundColor = '#222';
 document.querySelector('.number').textContent = '?';
 document.querySelector('.number').style.width = '15rem';
 document.querySelector('.guess').value = '';
 displayMessage('Start guessing...');
 number = Math.trunc(Math.random() * 20 + 1);
})
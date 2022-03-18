'use strict';

//State Variables
let scoreState = 20;
// All Variables of Html Elements
let message = document.querySelector('.message');
let number = document.querySelector('.number');
let guess = document.querySelector('.guess');
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');
let checkResult = document.querySelector('.check');
let again = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//Event Handler for checkResult Button
checkResult.addEventListener('click', function () {
  console.log(typeof scoreState);

  if (!guess.value) {
    message.textContent = '⛔ No Number';
  } else {
    number.textContent = guess.value;
    if (Number(guess.value) == secretNumber) {
      document.querySelector('body').style.background = 'green';
      document.querySelector('.number').style.width = '30rem';

      message.textContent = '🎉 Correct Number';
      if (scoreState > Number(highscore.textContent))
        highscore.textContent = scoreState;
    } else {
      if (scoreState === 0) {
        message.textContent = '😢 You lose the game';
      } else if (Number(guess.value) > secretNumber)
        message.textContent = '✋ Too High';
      else message.textContent = '🤏 Too Low';
      scoreState--;
      score.textContent = scoreState;
    }
  }
  if (scoreState === 0) {
    message.textContent = '😢 You lose the game';
  }
});

again.addEventListener('click', function () {
  scoreState = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing...';
  document.querySelector('body').style.background = '#222';
  document.querySelector('.number').style.width = '15rem';
  score.textContent = scoreState;
  number.textContent = '?';
  guess.value = '';
});

'use strict';

//Helper Variables (State Variables)
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
let play = true;

//Selecting Elements of Score
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overaly = document.querySelector('.overaly');
//Buttons
const btnNew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

//Setting Both Intial Score to 0
score0Element.textContent = 0;
score1Element.textContent = 0;

//Setting Dice to Display Not at start
dice.classList.add('hidden');

btnroll.addEventListener('click', function () {
  if (play) {
    //Generate Dice
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');

    //1st Way
    /*
  switch (diceNumber) {
    case 1:
      dice.src = 'dice-1.png';
      break;
    case 2:
      dice.src = 'dice-2.png';
      break;
    case 3:
      dice.src = 'dice-3.png';
      break;
    case 4:
      dice.src = 'dice-4.png';
      break;
    case 5:
      dice.src = 'dice-5.png';
      break;
    case 6:
      dice.src = 'dice-6.png';
      break;
  }
  */
    // Second Way of Literal Strings
    dice.src = `dice-${diceNumber}.png`;

    //Check for Rolled 1

    if (diceNumber !== 1) {
      currentScore += diceNumber;
      if (!activePlayer) {
        current0Element.textContent = currentScore;
      } else {
        current1Element.textContent = currentScore;
      }
    } else {
      changeState();
    }
  }
});

btnhold.addEventListener('click', function () {
  if (play) {
    //Add to active player
    scores[activePlayer] += currentScore;
    //Assigning
    activePlayer === 0
      ? (score0Element.textContent = scores[0])
      : (score1Element.textContent = scores[1]);

    //Winner
    if (scores[activePlayer] >= 20) {
      play = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      document.querySelector('.win-msg').textContent = `Player ${
        activePlayer + 1
      } has won the Game!`;
      modal.classList.remove('hidden');
      overaly.classList.remove('hidden');
    } else {
      changeState();
    }
  }
});

// Change State Function
const changeState = function () {
  if (activePlayer === 0) {
    activePlayer = 1;
    current0Element.textContent = 0;
  } else {
    activePlayer = 0;
    current1Element.textContent = 0;
  }
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');

  currentScore = 0;
};

// New Game Button Logic
btnNew.addEventListener('click', function () {
  if (!play) {
    play = true;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--winner');
  }
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
  scores[0] = 0;
  scores[1] = 1;
  current0Element.textContent = 0;
  current1Element.textContent = 0;
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  currentScore = 0;
  activePlayer = 0;
});

//Modal will be close
closeModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overaly.classList.add('hidden');
});

//If user press escape key at Modal
document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    overaly.classList.add('hidden');
  }
});

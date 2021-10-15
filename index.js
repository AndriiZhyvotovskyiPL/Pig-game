'use strict';

// Selected elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceImg = document.getElementById('dice');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');


// Starting conditions
score0El.textContent = '0';
score1El.textContent = '0';
currentScore0El.textContent = '0';
currentScore1El.textContent = '0';
diceImg.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
let playing = true;

const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = '0';
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// Rolling dice functionality
btnRoll.addEventListener('click', () => {
    if (playing) {
        // Generating a random dice
        const randomDice = Math.trunc(Math.random() * 6) + 1;

        // Display dice
        diceImg.classList.remove('hidden');
        diceImg.src = `dice-${randomDice}.png`;

        // Check for rolled 1: if true, switch to next player
        if (randomDice !== 1) {
            // Add dice to current score
            currentScore += randomDice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // Switch to next player
            switchPlayer();
        }
    }
})

btnHold.addEventListener('click', () => {
    if (playing) {
        // Add current score to active player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        // Check if player's score is >= 100
        if (scores[activePlayer] >= 10) {
            // Finish game
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceImg.classList.add('hidden');
            playing = false;
        } else {
            // Switch to the next player
            switchPlayer();
        }
    }
})
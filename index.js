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


// Starting conditions
score0El.textContent = '0';
score1El.textContent = '0';
currentScore0El.textContent = '0';
currentScore1El.textContent = '0';
diceImg.classList.add('hidden');

let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', () => {
    // Generating a random dice
    const randomDice = Math.trunc(Math.random() * 6) + 1;

    // Display dice
    diceImg.classList.remove('hidden');
    diceImg.src = `dice-${randomDice}.png`;

    // Check for rolled 1: if true, switch to next player
    if (randomDice !== 1) {
        // Add dice to current score
        currentScore += randomDice;
        currentScore0El.textContent = currentScore; // Change later
    } else {
        // Switch to next player

    }
})
'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.check').textContent === 'Play again');
  if (document.querySelector('.check').textContent === 'Play again') {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.check').textContent = 'Check!';
  } else {
    const guess = Number(document.querySelector('.guess').value);
    // When there is no input
    if (!guess) {
      document.querySelector('.message').textContent = '👽  No number';
    }
    // When player wins
    else if (guess === secretNumber) {
      document.querySelector('.message').textContent = ' 😎 Correct Number';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

      document.querySelector('.check').textContent = 'Play again';
    }
    // When Value is greater
    else if (guess !== secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent =
          guess > secretNumber ? ' 🚀 Too high!' : ' 🐳 Too low!';
        score--;
          guess > secretNumber ? document.querySelector('.message').style.color = 'red' : document.querySelector('.message').style.color = '#00BCF2';
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent =
          ' 😯 You lost the game';
        document.querySelector('.score').textContent = 0;
      }
    }
  }
});

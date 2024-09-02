const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');

let score = 0;
let timeLeft = 30;
let activeMole = null;
let gameInterval, moleInterval;

function randomHole() {
    const index = Math.floor(Math.random() * holes.length);
    return holes[index];
}

function showMole() {
    const hole = randomHole();
    const mole = document.createElement('div');
    mole.classList.add('mole');
    hole.appendChild(mole);
    mole.style.display = 'block';
    activeMole = mole;

    mole.addEventListener('click', function() {
        score++;
        scoreDisplay.innerText = 'Score: ' + score;
        mole.style.display = 'none';
        hole.removeChild(mole);
        activeMole = null;
    });
}

function hideMole() {
    if (activeMole) {
        activeMole.style.display = 'none';
        activeMole.parentElement.removeChild(activeMole);
        activeMole = null;
    }
}

function startGame() {
    gameInterval = setInterval(function() {
        timeLeft--;
        timerDisplay.innerText = 'Time Left: ' + timeLeft;

        if (timeLeft <= 0) {
            clearInterval(gameInterval);
            clearInterval(moleInterval);
            alert('Game Over! Your score is: ' + score);
        }
    }, 1000);

    moleInterval = setInterval(function() {
        hideMole();
        showMole();
    }, 1000);
}

startGame();

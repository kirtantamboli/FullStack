const game = document.getElementById('game');
const basket = document.getElementById('basket');
const scoreDisplay = document.getElementById('score');

let score = 0;
let basketPosition = 160;
let gameWidth = game.clientWidth;
let basketWidth = basket.clientWidth;
let gameHeight = game.clientHeight;

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft' && basketPosition > 0) {
        basketPosition -= 20;
        basket.style.left = basketPosition + 'px';
    } else if (event.key === 'ArrowRight' && basketPosition < gameWidth - basketWidth) {
        basketPosition += 20;
        basket.style.left = basketPosition + 'px';
    }
});

function createFruit() {
    const fruit = document.createElement('div');
    fruit.classList.add('fruit');
    fruit.style.left = Math.random() * (gameWidth - 30) + 'px';
    fruit.style.top = '0px';
    game.appendChild(fruit);
    return fruit;
}

function dropFruit(fruit) {
    const dropInterval = setInterval(function() {
        let fruitTop = parseInt(fruit.style.top);
        if (fruitTop < gameHeight - 40) {
            fruit.style.top = fruitTop + 5 + 'px';
        } else {
            clearInterval(dropInterval);
            game.removeChild(fruit);
            if (parseInt(fruit.style.left) >= basketPosition && parseInt(fruit.style.left) <= basketPosition + basketWidth) {
                score++;
                scoreDisplay.innerText = 'Score: ' + score;
            }
        }
    }, 20);
}

function startGame() {
    setInterval(function() {
        const fruit = createFruit();
        dropFruit(fruit);
    }, 1000);
}

startGame();

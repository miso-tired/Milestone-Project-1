/* Make Snake */
const playBoard = document.querySelector('.play-board');


let gameOver = false; 
let nodeX, nodeY;
let snakeX = 5, snakeY = 10;
let snakeBody = [];
let velocityX = 0, velocityY = 0;
let setIntervalId;

const changeNodePosition = () => {
    nodeX = Math.floor(Math.random() * 35) + 1;
    nodeY = Math.floor(Math.random() * 35) + 1;
}

const promptGameOver = () => {
    clearInterval(setIntervalId);
    alert("Game Over! Press OK to replay");
    location.reload();
}

const changeDirection = (e) => {
    if(e.key === "ArrowUp") {
        velocityX = 0;
        velocityY = -1;
    } else if(e.key === "ArrowDown") {
        velocityX = 0;
        velocityY = 1;
    } else if(e.key === "ArrowLeft") {
        velocityX = -1;
        velocityY = 0;
    } else if(e.key === "ArrowRight") {
        velocityX = 1;
        velocityY = 0;
    }
    startGame()
}

const startGame = () => {
    if(gameOver) return promptGameOver();
    let htmlMarkup = `<div class="node" style="grid-area: ${nodeY} / ${nodeX}"></div>`;

    if(snakeX === nodeX && snakeY === nodeY) {
        changeNodePosition();
        snakeBody.push([nodeX, nodeY]);
        console.log(snakeBody)
    }

    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }

    snakeBody[0] = [snakeX, snakeY];

    snakeX += velocityX;
    snakeY += velocityY;

    if(snakeX <= 0 || snakeX > 35 || snakeY <= 0 || snakeY > 35) {
        gameOver = true;
    }

    for (let i = 0; i < snakeBody.length; i++) {
        htmlMarkup += `<div class ="snake" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
    }
    
    playBoard.innerHTML = htmlMarkup;
}

changeNodePosition();
setIntervalId = setInterval(startGame, 125);

document.addEventListener("keydown", changeDirection);
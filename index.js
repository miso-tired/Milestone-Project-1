/* Make Snake */
const playBoard = document.querySelector('.play-board');

let nodeX, nodeY;
let snakeX = 5, snakeY = 10;

const changeNodePosition = () => {
    nodeX = Math.floor(Math.random() * 35) + 1;
    nodeY = Math.floor(Math.random() * 35) + 1;

}

const startGame = () => {
    let htmlMarkup = `<div class="node" style="grid-area: ${nodeY} / ${nodeX}"></div>`;
    htmlMarkup += `<div class ="snake" style="grid-area: ${snakeY} / ${snakeX}"></div>`;
    playBoard.innerHTML = htmlMarkup;
}

changeNodePosition();
startGame();
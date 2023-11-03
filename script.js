//Board
var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

//the snakes head
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var velocityX = 0;
var velocityY = 0;

//the snakes food
var foodX;
var foodY;

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); //this is used for the drawing on the board
    
    placeFood();
    document.addEventListener("keyup", changeDirection);
    //update(); is gone since i want to call it moltiple times
    setInterval(update, 1000/10); // update placement in canvas every 100 milliseconds
}

function update() {
    context.fillStyle="black"; //gives color to the bord
    context.fillRect(0, 0, board.height, board.width); // this make it start filling the color from point 0,0 of the board


    context.fillStyle="red"; //color for the food
    context.fillRect(foodX, foodY, blockSize, blockSize); // place for the snakes food

    if (snakeX == foodX && snakeY == foodY) {
        placeFood();
    }

    context.fillStyle="blue"; // color for the snake
    snakeX += velocityX * blockSize; // making snake speed X axis faster
    snakeY += velocityY * blockSize; // -:- but Y axis
    context.fillRect(snakeX, snakeY, blockSize, blockSize); // place for the snake
}

// movement for snake
function changeDirection(e) {
    if (e.code == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code == "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1
    }
    else if (e.code == "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code == "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}

// randomized placement for the food
function placeFood() {
    foodY = Math.floor(Math.random() * rows) * blockSize;
    foodX = Math.floor(Math.random() * cols) * blockSize;
}
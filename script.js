//Board
var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

//the snakes head
var snakeY = blockSize * 5;
var snakeX = blockSize * 5;

var velocityY = 0;
var velocityX = 0;

//the snakes food
var foodY;
var foodX;

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); //this is used for the drawing on the board
    
    placeFood();
    document.addEventListener("keyup", changeDirection);
    //update();
    setInterval(update, 1000/10); // update placement in canvas every 100 milliseconds
}

function update() {
    context.fillStyle="black"; //gives color to the bord
    context.fillRect(0, 0, board.height, board.width); // this make it start filling the color from point 0,0 of the board

    context.fillStyle="blue"; // color for the snake
    snakeY += velocityY;
    snakeX += velocityX;
    context.fillRect(snakeY, snakeX, blockSize, blockSize); // place for the snake

    context.fillStyle="red"; //color for the food
    context.fillRect(foodY, foodX, blockSize, blockSize); // place for the snakes food
}

// movement for snake
function changeDirection(e) {
    if (e.code == "ArrowUp"){
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code == "ArrowDown"){
        velocityX = 0;
        velocityY = 1
    }
    else if (e.code == "ArrowLeft"){
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code == "ArrowRight"){
        velocityX = 1;
        velocityY = 0;
    }
}

// randomized placement for the food
function placeFood() {
    foodY = Math.floor(Math.random() * rows) * blockSize;
    foodX = Math.floor(Math.random() * cols) * blockSize;
}
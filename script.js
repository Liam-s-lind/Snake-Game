//Board
var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

//the snakes head
var snakeY = blockSize * 5;
var snakeX = blockSize * 5;

//the snakes food
var foodY = blockSize * 10;
var foodX = blockSize * 10;

window.onload = function() {
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); //this is used for the drawing on the board

    update();
}

function update() {
    context.fillStyle="black"; //gives color to the bord
    context.fillRect(0, 0, board.height, board.width); // this make it start filling the color from point 0,0 of the board

    context.fillStyle="blue"; // color for the snake
    context.fillRect(snakeY, snakeX, blockSize, blockSize); // place for the snake

    context.fillStyle="red"; //color for the food
    context.fillRect(foodY, foodX, blockSize, blockSize); // place for the snakes food
}
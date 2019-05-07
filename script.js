'use strict';

const snake = createSnake();
const apples = createSnakeFood();
const positionOfBody = [];

let rightClear,
  leftClear,
  topClear,
  bottomClear; // clear vars

let snakeHead,
  divStyle,
  food,
  moveTime = 100,
  foodLeft,
  foodTop,
  snakeBody,
  count = 0,
  boxes;

function createSnake() {

const snake = {};

snake.growHead = () => {
  snakeHead = document.createElement('div'); 
  snakeHead.classList.add("simpleBox");
  document.body.appendChild(snakeHead);
  divStyle = window.getComputedStyle(snakeHead);
}

snake.moveRight = () => {
  rightClear = setInterval(() => {
  snakeHead.style.left = `${parseInt(divStyle.left, 10) + 10}px`;
  positionOfBody.unshift([parseInt(divStyle.left, 10), parseInt(divStyle.top, 10)]);
  snake.eat();
  }, moveTime);
}

snake.moveLeft = () => {
  leftClear = setInterval(() => {
  snakeHead.style.left = `${parseInt(divStyle.left, 10) - 10}px`;
  positionOfBody.unshift([parseInt(divStyle.left, 10), parseInt(divStyle.top, 10)]);
  snake.eat();
  }, moveTime);
}

snake.moveTop = () => {
  topClear = setInterval(() => {
  snakeHead.style.top = `${parseInt(divStyle.top, 10) - 10}px`;
  positionOfBody.unshift([parseInt(divStyle.left, 10), parseInt(divStyle.top, 10)]);
  snake.eat();
  }, moveTime);
}

snake.moveBottom = () => {
  bottomClear = setInterval(() => {
  snakeHead.style.top = `${parseInt(divStyle.top, 10) + 10}px`;
  positionOfBody.unshift([parseInt(divStyle.left, 10), parseInt(divStyle.top, 10)]);
  snake.eat();
  }, moveTime);
}

snake.eat =	() => {
  if((((foodLeft <= parseInt(divStyle.left, 10)) && (foodLeft + 10 >= parseInt(divStyle.left, 10)))
  && ((foodTop <= parseInt(divStyle.top, 10)) && (foodTop + 10 >= parseInt(divStyle.top, 10)))) 
  ||
  (((foodLeft <= parseInt(divStyle.left, 10)) && (foodLeft + 10 >= parseInt(divStyle.left, 10)))
  && ((foodTop <= parseInt(divStyle.top, 10) + 10) && (foodTop + 10 >= parseInt(divStyle.top, 10) + 10))) 
  ||
  (((foodLeft <= parseInt(divStyle.left, 10) + 10) && (foodLeft + 10 >= parseInt(divStyle.left, 10) + 10))
  && ((foodTop <= parseInt(divStyle.top, 10)) && (foodTop + 10 >= parseInt(divStyle.top, 10)))) 
  ||
  (((foodLeft <= parseInt(divStyle.left, 10) + 10) && (foodLeft + 10 >= parseInt(divStyle.left, 10) + 10))
  && ((foodTop <= parseInt(divStyle.top, 10) + 10) && (foodTop + 10 >= parseInt(divStyle.top, 10) + 10)))) {
    document.body.removeChild(food);
    apples.grow();
    snake.grow();
  }
}

snake.stopMove = () => {
  clearInterval(rightClear);
  clearInterval(leftClear);
  clearInterval(topClear);
  clearInterval(bottomClear);
}

  snake.wormFaster = () => {
    moveTime -= 100;
  }

  snake.grow = () => {
    snakeBody = document.createElement('div'); 
    snakeBody.classList.add("simpleBox");
    document.body.appendChild(snakeBody);
    count++;
    boxes = document.getElementsByClassName('simpleBox');
    snake.bodyMove(count);
  }

  snake.bodyMove = (count) => {
    setInterval(() => {
       boxes[count].style.left = `${positionOfBody[count][0]}px`;
       boxes[count].style.top = `${positionOfBody[count][1]}px`;
    }, moveTime);
  }

  return snake;
}

function createSnakeFood() {
  const apples = {};
  apples.grow = () => {
    food = document.createElement('div'); 
    food.classList.add("randomBox");
    document.body.appendChild(food);
    foodLeft = Math.floor(Math.random() * (window.innerWidth - 10));
    foodTop = Math.floor(Math.random() * (window.innerHeight - 10));
    food.style.left = `${foodLeft}px`;
    food.style.top = `${foodTop}px`;
  }
  return apples;
}

window.onload = event => {
  snake.growHead();
  snake.moveRight();
  apples.grow();
}

window.onkeydown = event => {
  snake.stopMove();
  if (event.keyCode === 37) {
    snake.moveLeft();
  }
  if (event.keyCode === 38) {
    snake.moveTop();
  }
  if (event.keyCode === 39) {
    snake.moveRight();
  }
  if (event.keyCode === 40) {
    snake.moveBottom();
  }
}

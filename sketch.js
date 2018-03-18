// Snake Game
var snake
var food

var scale = 20
var rows, cols;


function setup() {
  // put setup code here
  createCanvas(800, 800)

  frameRate(50)

  snake = new Snake(200, 200)
  food = new Food()

}

function draw() {
  // put drawing code here
  background(51)
  snake.show()
  food.show()
  snake.update()
  if (snake.hasEaten(food)) {
    food.setLocation()
  }



}


function keyPressed() {

  if (keyCode == UP_ARROW)

    snake.direction(0, -1)
  else if (keyCode == DOWN_ARROW)

    snake.direction(0, 1)

  else if (keyCode == LEFT_ARROW)

    snake.direction(-1, 0)

  else if (keyCode == RIGHT_ARROW)

    snake.direction(1, 0)



}

function Food() {

  this.setLocation = function () {

    var cols = floor(width / this.scale)
    var rows = floor(height / this.scale)
    this.x = floor(random(cols)) * this.scale
    this.y = floor(random(rows)) * this.scale

  }
  this.scale = 20
  this.setLocation()

  console.log(this.x)
  console.log(this.y)

  this.w = 20

  this.show = function () {

    fill(0, 255, 0)
    rect(this.x, this.y, this.w, this.w)

  }


}
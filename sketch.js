var balloon;
var backroundImg, balloonColors;

function preload() {
  backgroundImg = loadImage("BackgroundImg.png");

  balloonColors = loadAnimation("balloon1.png", "balloon2.png", "balloon3.png");
}

function setup() {
  createCanvas(1000,650);

  balloon = createSprite(250, 475, 50, 50);
  balloon.addAnimation("ColorChange", balloonColors);
  balloon.scale = 0.6;
}

function draw() {
  background(backgroundImg);
  
  fill(255, 0, 0);
  textSize(24);
  text("Use arrow keys to move the balloon", 38, 30);
  
  if(keyDown(LEFT_ARROW)) {
    balloon.x = balloon.x - 10;
  }
  if(keyDown(RIGHT_ARROW)) {
    balloon.x = balloon.x + 10;
  }
  if(keyDown(UP_ARROW)) {
    balloon.y = balloon.y - 10;
    balloon.scale = balloon.scale - 0.01;
  }
  if(keyDown(DOWN_ARROW)) {
    balloon.y = balloon.y + 10;
    balloon.scale = balloon.scale + 0.01;
  }
  
  drawSprites();
}
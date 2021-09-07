var BgImg ,bg;
var player,playerImg
var creepyDoll,creepyDollImg

function preload() {
  BgImg =loadImage ("eee.jpg");
 creepyDollImg= loadImage ("ane.jpg");
 playerImg= loadImage ("brenfi-girl.gif")
}


function setup() {

  createCanvas(windowWidth,windowHeight);

  bg= createSprite (displayWidth/2-140,displayHeight/2-10,50,50)
  bg.addImage (BgImg)
  bg.scale=1.6

  player= createSprite (displayWidth/2-140,displayHeight/2-10,50,50)
  player.addImage (BgImg)
  bg.scale=1.6



}

function draw() {
  background(255,255,255);  
  drawSprites();
}
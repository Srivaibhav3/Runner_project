var runner;
var ground;
var runnerImg;
var groundImg;
var leftbarrier;
var rightbarrier;
var a;

function preload(){
  //pre-load images
  runnerImg=loadAnimation("Runner-1.png","Runner-2.png");
  groundImg=loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
ground=createSprite(200,200);
ground.addImage(groundImg);
ground.velocityY=4;
ground.scale=1.2;

runner=createSprite(180,340,30,30);
runner.scale=0.08;
runner.addAnimation("running",runnerImg);

leftbarrier=createSprite(0,0,100,100);
leftbarrier.visible=false;

rightbarrier=createSprite(410,0,100,100);
rightbarrier.visible=false;
}

function draw() {
  background(0);
  ground.velocityY=4;
  
  runner.x=World.mouseX;

  edges=createEdgeSprites();
  runner.collide(edges[3]);
  runner.collide(leftbarrier);
  runner.collide(rightbarrier);

  if(ground.y > 400){
    ground.y = height/2;
  }

  drawSprites();
}
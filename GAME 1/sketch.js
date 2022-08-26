const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var scene1,scene1Img,scene2,scene2Img;
var player,playerImg;

function preload() {
  //load Images then Animations
  playerImg = loadImage('assets/pixil-frame-0.png');
  scene1Img = loadImage('assets/pixil-frame-0 (9).png');
  scene2Img = loadImage('assets/pixil-frame-0 (10).png');
  //load Sound here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  //create Sprites here
  player = createSprite(windowWidth/2,windowHeight/2,35,35);
  scene1 = createSprite(windowWidth/2,windowHeight/1.1);
  scene2 = createSprite(-285,windowHeight/1.18)

  //create Objects here

  //add Images here
  player.addImage(playerImg);
  scene1.addImage(scene1Img);
  scene2.addImage(scene2Img);

  //add Specifications here(size,scale,)
  player.scale = 0.43;

  scene1.scale = 7.3;
  scene1.depth = player.depth - 1;
  scene2.scale = 7.3;
  scene2.depth = scene1.depth;

}

function draw() {
  background(0);
  Engine.update(engine);
  KeyPressed();

  //add Limits here
  if(player.x < 0)
  {
    player.x = 0;
  }
  if(player.x > 1470)
  {
    player.x = 1470;
  }

  //add Collisions here
  player.collide(scene1);
  player.collide(scene2);
  player.velocityY = 9;

  drawSprites();
}

function KeyPressed()
{
  //Put all Key Functionality here
  if(keyDown(87) && player.collide(scene1))
  {
    player.y-=200;
  }
  if(keyDown(83))
  {
    player.y+=1;
  }
  if(keyDown(68) && scene1.x > 375 && player.x === 750)
  {
    scene1.x-=5;
    scene2.x-=5;
  }
  else{
    if(keyDown(68))
    {
      player.x+=5;
    }
  }
  if(keyDown(65) && scene1.x < 1090 && player.x === 545)
  { 
      scene1.x+=5;
      scene2.x+=5;
  }
  else{
    if(keyDown(65))
    {
      player.x-=5;
    }
  }
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  ground= new Ground(400,390,800,20)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
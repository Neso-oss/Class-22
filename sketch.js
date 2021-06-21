//aliases or namespace
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myEngine, myWorld;
var box;
var ground;
var ball;

function setup() {
  createCanvas(800,400);
  //first create an engine
  myEngine  = Engine.create();
  //create a world
  myWorld = myEngine.world;

  // properties are given in JSON format 
  //key value pair 
  var bProp={
    restitution: 0.2
  }
var cProp={
  restitution: 0.7
}
  //cerate bodies 
  box = Bodies.rectangle(100,200,40,50,bProp);
  var gProp = {
    isStatic: true
  };
  ground = Bodies.rectangle(400,380,800,20,gProp);
  ball = Bodies.circle(200,150,20,cProp);

  //add those bodies to the world
World.add(myWorld,box)
World.add(myWorld,ground);
World.add(myWorld,ball)
console.log(box);
  //these bodeis exsit only in the physics world
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  //x and y axis of rectangle will be center of rect
  rectMode(CENTER)
  //update my engine
Engine.update(myEngine);
  //fresh bodies on the screen
  rect(box.position.x,box.position.y,40,50);
  rect(ground.position.x,ground.position.y,800,20);
  //make those bodies copy location of the physics bodies
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
}
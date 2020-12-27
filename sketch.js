
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var offSetX, offSetY;
var bobX, bobY;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);

	bobDiameter = 40;

	engine = Engine.create();
	world = engine.world;

	bobX = width/2;
	bobY = height/4+500;
	//Create the Bodies Here.
	bobObject1 = new Bob(bobX-bobDiameter*2,bobY,bobDiameter);
	bobObject2 = new Bob(bobX-bobDiameter,bobY,bobDiameter);
	bobObject3 = new Bob(bobX,bobY,bobDiameter);
	bobObject4 = new Bob(bobX+bobDiameter,bobY,bobDiameter);
	bobObject5 = new Bob(bobX+bobDiameter*2,bobY,bobDiameter);

	roof1 = new Roof(400,50,700,20);

	rope1 = new Rope(bobObject1.body,roof1.body,-bobDiameter*2,0);
	rope2 = new Rope(bobObject2.body,roof1.body,-bobDiameter*1,0);
	rope3 = new Rope(bobObject3.body,roof1.body,0,0);
	rope4 = new Rope(bobObject4.body,roof1.body,bobDiameter*1,0);
	rope5 = new Rope(bobObject5.body,roof1.body,bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

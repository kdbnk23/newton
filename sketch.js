
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	bobDiameter=40
	//Create the Bodies Here.
	roof=new Roof(400,400,600,5)
	bobObject1= new Bob(200,600,20)
	bobObject2= new Bob(400,600,20)
	bobObject3= new Bob(600,600,20)
	bobObject4= new Bob(800,600,20)
	bobObject5= new Bob(1000,600,20)
	rope1=new Chain(bobObject1.body,roof.body, -bobDiameter*2, 0)
	rope2=new Chain(bobObject2.body,roof.body, -bobDiameter*1, 0)
	rope3=new Chain(bobObject3.body,roof.body,0, 0)
	rope4=new Chain(bobObject4.body,roof.body, bobDiameter*1, 0)
	rope5=new Chain(bobObject5.body,roof.body, bobDiameter*4, 0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  drawSprites();
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
  roof.display()
rope1.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()
}




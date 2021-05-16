
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);

	background(0);
	
	angleMode(DEGREES);
	
	hr = hour();
	mn = minute();
	sc = second();
	
	scAngle= map(sc,0,60,0,360);
	Push();
	rotate(scAngle)
	stroke(255,0,0);
	strokeWeight(7);
	line(0,0,100,0);
	Pop();
	
	drawSprites();

}




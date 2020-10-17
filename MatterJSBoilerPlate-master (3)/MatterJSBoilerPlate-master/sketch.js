
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,dustBin,Paper;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground= new Ground(500,700,1000,10);
dustBin= new dustbin(580,660,10,70);
dust= new dustbin(625,690,100,10);
dustben= new dustbin(680,660,10,70);
Paper= new paper(400,350,20,20);

	Engine.run(engine);
  
}


function draw() {
  background("white");
  rectMode(CENTER);
  ground.display();
  dustBin.display();
  dust.display();
  dustben.display();
  Paper.display();
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(Paper.body,Paper.body.position,{x:85,y:-85});
  }
}



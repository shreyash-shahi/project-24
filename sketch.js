var ground,dustbin1,paper,invisibleWall;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 650);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 dustbin1 = new Dustbin(690,590,150,15);
	 dustbin2 = new Dustbin(607,550,15,100);
	 dustbin3 = new Dustbin(773,550,15,100);	 
     ground = new Ground(400,610,800,20);
	 paper = new Paper(100,600,20);
	 
	 keyPressed();

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);

  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  paper.display();

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:58,y:-66})
	}
	
}



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,ground1,bin1,bin2,bin3;

function preload(){

	
  
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
    
	world = engine.world;
	//Create the Bodies Here.
	paper1=new paper(80,400);
  ground1=new ground(400,590);
  bin1=new bin(1110,485,30,150);
  bin2=new bin(1030,560,200,30);
  bin3=new bin(945,485,30,150);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  paper1.display();
  ground1.display();
  bin1.display();
  bin3.display();
  bin2.display();
  
  
  
  //drawSprites();
 
}
function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
    
  }

}



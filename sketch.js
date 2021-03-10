var helicopterIMG, helicopterSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var leftfoot, middlefoot, rightfoot;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	leftfoot=createSprite(width/2-80, 610, 20, 100);
	leftfoot.shapeColor='grey'

	middlefoot=createSprite(width/2-20, 650, 130, 20)
	middlefoot.shapeColor='grey'

	rightfoot=createSprite(width/2+55, 610, 20,100)

	



	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
	engine=Engine.create();
	
	leftBody=Bodies.rectangle(width/2-80, 610, 20, 100, {isStatic:true})
	World.add(world, leftBody)
	middleBody=Bodies.rectangle(width/2-20, 650, 130, 20, {isStatic:true})
	World.add(world, middleBody)
	rightBody=Bodies.rectangle(width/2+55, 610, 20, 100, {isStatic:true})
	World.add(world, rightBody)
	
  var ground_options ={
    isStatic: false
  }
  ground= Bodies.rectangle(400,380,800,20,ground_options)
  World.add(world,ground);
  
  

  
  console.log(ground);
  
}





  



function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

	Matter.Body.setStatic(packageBody, false)
    
  }
}




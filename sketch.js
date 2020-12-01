//Author : Mihishkaa Sinha
//create a game that helps the people now how to throw the paper into the dustbin by pressing on the upper arrow key.(Now with images)

//create all the constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//create all the variables
var dustbin, paper, ground, wall;
var world;

//create a function preload for loading all the images
function preload() {
	dustbin_img = loadImage("images/dustbin.png")
}

//create the function setup
function setup() {

	//create a canvas
	createCanvas(1100, 570);

	imageMode(CENTER);

	//create the Engine and add it to world
	engine = Engine.create();
	world = engine.world;
	
	//create a paper objectx
	paper = new Paper(212, 390, 80, 80);

	//create a ground
	ground = new Ground(width / 2, 560, width, 20);

	//create the dustbin
	dustbin = createSprite(1002, 450, 180, 175);
	dustbin.addImage("dustbin", dustbin_img);
	dustbin.scale = 0.6;

	//create the dustbin
	dustbin1 = new Dustbin(930, 490, 20, 110);
	dustbin2 = new Dustbin(1080, 490, 20, 110);
	dustbin3 = new Dustbin(1010, 543, 150, 10);

	//create the walls
	//wall = new Wall(1000, 300, 30, 100);

	//running the Engine
	Engine.run(engine);
  
}

//create the function draw
function draw() {
  imageMode(CENTER);
  background(253, 226, 135);
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();

}

//create the function keyPressed()
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body, paper.body.position, {x : 350, y : -480});

	}
}
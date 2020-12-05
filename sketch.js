
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var boyImage, boy;
var groundSprite, groundOBJ;
var tree, treeImage;

var mango1, mango2, mango3, mango4, mango5, mango6;

var stone, chain;

function preload()
{
	boyImage = loadImage("Images/boy.png");
	treeImage = loadImage("Images/tree.png");
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	tree = createSprite(650, 420);
	tree.addImage(treeImage);
	tree.scale = 0.42;

	 mango1 = new Mango(Math.round(random(507, 678)), Math.round(random(171, 386)), 50 );
	 mango2 = new Mango(Math.round(random(507, 678)), Math.round(random(171, 386)), 50 );
	 mango3 = new Mango(Math.round(random(507, 678)), Math.round(random(171, 386)), 50);
	 mango4 = new Mango(Math.round(random(507, 678)), Math.round(random(171, 386)), 50);
	 mango5 = new Mango(Math.round(random(507, 678)), Math.round(random(171, 386)), 50);
	 mango6 = new Mango(Math.round(random(507, 678)), Math.round(random(171, 386)), 50);
   
	groundSprite = createSprite(400, 690, 1210, 20);
	groundOBJ = Bodies.rectangle(400, 690 ,1000, 20, {isStatic : true});
	World.add(world, groundOBJ);


	stone = new Stone(62, 506, 70);

	chain = new Chain(stone.body, {x:100, y:511});

	
	
	boy = createSprite(180, 590, 10, 10);
	boy.addImage(boyImage);
	boy.scale = 0.15

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(210);

  drawSprites();
	  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  stone.display();

  Collide(stone, mango1);
  Collide(stone, mango2);
  Collide(stone, mango3);
  Collide(stone, mango4);
  Collide(stone, mango5);
  Collide(stone, mango6);

}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
	chain.fly();
}

function Collide(lstones,lmango){
	MangoBodyPosition = lmango.body.position;
	StoneBodyPosition = lstones.body.position;

	var distance = dist(StoneBodyPosition.x, StoneBodyPosition.y, MangoBodyPosition.x, MangoBodyPosition.y);
	if(distance <= lmango.radius + lstones.radius){
		Matter.Body.setStatic(lmango.body, false);
	}
	
	}

	function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:62, y:506});
		chain.attach(stone.body);
	}
}






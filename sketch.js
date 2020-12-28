
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, stone, mango1, mango2, mango3, mango4, mango5, boy, thrower, ground

function preload()
{
	boy = loadImage("Plucking mangoes/boy.png");
	tree = loadImage("Plucking mangoes/tree.png");
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,690,1200,20);
	stone = new Stone(85,550,30);
	thrower = new Slingshot(stone.body,{x:185,y:535});
	mango1 = new Mango(933,117,40);
	mango2 = new Mango(830,282,40);
	mango3 = new Mango(1089,254,40);
	mango4 = new Mango(957,216,40);
	mango5 = new Mango(1007,50,40);

	Engine.run(engine);
  
}


function draw() {
  imageMode(CENTER);
  background(240);
  text(mouseX+","+mouseY,10,20);

	 ground.display();
	 image(tree,950,360,475,700);
	image(boy,250,620,200,300);

	 stone.display();
	 thrower.display();
	 mango1.display();
	 mango2.display();
	 mango3.display();
	 mango4.display();
	 mango5.display();
	
	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	thrower.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:185, y:535}) 
	  thrower.attach(stone.body);
	}
  }

  function detectCollision(lstone,lmango){

	mangoPos=lmango.body.position;
	  stonePos=lstone.body.position;
	  
	  var distance=dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y);
	  if(distance<=lmango.radius+lstone.radius)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }
  }

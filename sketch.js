
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var bg_img, ground;
var crane;


function preload()
{
  bg_img = loadImage('bg.png')
  ground = loadImage('ground2.png')
  //crane = loadImage('crane1.png')
  crane = loadAnimation("crane1.png","crane2.png");
  //crane.playing = true;
}

function setup() {
  createCanvas(800,500);

  engine = Engine.create();
  world = engine.world;

  //create sprite and add animation
  //crane btn
  crane = createImg('crane1.png');
  crane.position(80,50);
  crane.size(290,280);
//crane.mouseClicked(drop);

//brick object
  brick1 =new Brick(300,300,70,20)
  brick2 =new Brick(300,325,70,20)
  brick3 =new Brick(300,350,70,20)
  brick4 =new Brick(300,375,70,20)
  brick5 =new Brick(300,400,70,20)
  brick6 =new Brick(300,425,70,20)
  brick7 =new Brick(300,450,70,20)
  brick8 =new Brick(300,475,70,20)
  brick9 =new Brick(300,275,70,20)
  brick10 =new Brick(300,250,70,20)

  rectMode(CENTER);
	Engine.run(engine);
}


function draw() 
{
  background(51);
  image(bg_img,0,0,width,height);
  image(ground,0,470,797,40);

  rectMode(CENTER);
  brick1.show()
  brick2.show()
  brick3.show()
  brick4.show()
  brick5.show()
  brick6.show()
  brick7.show() 
  brick8.show() 
  brick9.show()
  brick10.show()


  Engine.update(engine);
  
}


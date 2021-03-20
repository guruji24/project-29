const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var ground,pyramidBase1;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var polygon1,chain;

function setup(){
    createCanvas(900,400);
    engine = Engine.create();
	world = engine.world;

    ground = new Ground(450,390,900,20);
    pyramidBase1 = new Ground(390,300,250,10);

    block1 = new Blocks(300,275,30,40);
    block2 = new Blocks(330,275,30,40);
    block3 = new Blocks(360,275,30,40);
    block4 = new Blocks(390,275,30,40);
    block5 = new Blocks(420,275,30,40);    
    block6 = new Blocks(450,275,30,40);
    block7 = new Blocks(480,275,30,40);
    block8 = new Blocks(330,235,30,40);    
    block9 = new Blocks(360,235,30,40);    
    block10 = new Blocks(390,235,30,40);
    block11 = new Blocks(420,235,30,40);
    block12 = new Blocks(450,235,30,40);
    block13 = new Blocks(360,195,30,40);
    block14 = new Blocks(390,195,30,40);
    block15 = new Blocks(420,195,30,40);
    block16 = new Blocks(390,155,30,40);

    polygon1 = new Polygon(700,300);

    chain = new SlingShot(polygon1.body,{x:800,y:300});

    Engine.run(engine);
}

function draw(){
    background("lightblue");

  detectCollision(polygon1,block1);
  detectCollision(polygon1,block2);
  detectCollision(polygon1,block3);
  detectCollision(polygon1,block4);
  detectCollision(polygon1,block5);
  detectCollision(polygon1,block7);
  detectCollision(polygon1,block8);
  detectCollision(polygon1,block9);
  detectCollision(polygon1,block10);
  detectCollision(polygon1,block11);
  detectCollision(polygon1,block12);
  detectCollision(polygon1,block13);
  detectCollision(polygon1,block14);
  detectCollision(polygon1,block15);
  detectCollision(polygon1,block16);

  fill(0,255,0);
  textSize(25);
  text("drag and drop to shoot and press space to shoot again",100,100);

    ground.display();
    pyramidBase1.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    polygon1.display();
    chain.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(polygon1.body,{x:800,y:300});
		chain.attach(polygon1.body);
	}
}

function detectCollision(lpolygon1,lblocks){
    
  console.log(lpolygon1.body.circleRadius)
  blocksBodyPosition=lblocks.body.position
  polygon1BodyPosition=lpolygon1.body.position
  
  var distance=dist(polygon1BodyPosition.x, polygon1BodyPosition.y, blocksBodyPosition.x, blocksBodyPosition.y);
  s = lpolygon1.body.rectangleWidth+lblocks.body.circleRadius;
  console.log(distance)
  if(distance<=s)
  {
    Matter.Body.setStatic(lblocks.body,false);
  }

}
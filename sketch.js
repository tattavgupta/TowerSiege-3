const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingshot
var gameState = "onSling";
var score=0
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1400,600);
  stroke(255)

  ground=new Ground(700,598,1400,10)
  
  stand=new Ground(1000,450,450,10)

  block1=new Box(1000,390,50,100)
  block2=new Box(950,390,50,100)
  block3=new Box(1050,390,50,100)
  block4=new Box(900,390,50,100)
  block5=new Box(1100,390,50,100)
  block6=new Box(850,390,50,100)
  block7=new Box(1150,390,50,100)

  block8=new Box(1000,290,50,100)
  block9=new Box(950,290,50,100)
  block10=new Box(1050,290,50,100)
  block11=new Box(900,290,50,100)
  block12=new Box(1100,290,50,100)

  block13=new Box(1000,190,50,100)
  block14=new Box(950,190,50,100)
  block15=new Box(1050,190,50,100)  

  block16=new Box(1000,90,50,100)

  polygon=new Polygon(200,250,20,20)
  slingshot=new SlingShot(polygon.polygon,{x:200,y:250})
}

function draw() {
  Engine.update(engine);
  background(0);  
  ground.display() 
  stand.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  polygon.display()
  slingshot.display()
  noStroke();
  textSize(35)
  fill("white")
  text("SCORE:"+score,750,40)
  block1.score()
  block2.score()
  block3.score()
  block4.score()
  block5.score()
  block6.score()
  block7.score()
  block8.score()
  block9.score()
  block10.score()
  block11.score()
  block12.score()
  block13.score()
  block14.score()
  block15.score()
  block16.score()
  drawSprites();
}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(polygon.polygon, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  if(gameState==="onSling"){
      slingshot.fly();
      gameState = "launched";   
  }
}

function keyPressed(){
  if(keyCode === 32){
      polygon.trajectory=[]
      gameState="onSling"
      slingshot.attach(polygon.polygon);
  }
}

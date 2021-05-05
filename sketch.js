const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body
const Constraint = Matter.Constraint;

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(0,375,1850,10);
  hero=new Hero(100,175,250,200);
  fly=new Fly(hero.body,{x:100,y:100});

  block1=new Block(350,150,50,50);
  block2=new Block(350,200,50,50)
  block3=new Block(350,250,50,50)
  block4=new Block(350,300,50,50)
  block5=new Block(450,150,50,50)
  block6=new Block(450,200,50,50)
  block7=new Block(450,250,50,50);
  block8=new Block(450,300,50,50)

  block9=new Block(550,150,50,50);
  block10=new Block(550,200,50,50)
  block11=new Block(550,250,50,50)
  block12=new Block(550,300,50,50)
  block13=new Block(650,150,50,50)
  block14=new Block(650,200,50,50)
  block15=new Block(650,250,50,50);
  block16=new Block(650,300,50,50)

  block17=new Block(350,50,50,50)
  block18=new Block(450,50,50,50)
  block19=new Block(550,50,50,50)
  block20=new Block(650,50,50,50)

  monster = new Monster(800,275,200,200)
  Engine.run(engine)
}

function draw() {
  background("blue");
  rectMode(CENTER)
  ground.display();
  hero.display();
  fly.display();
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
  block17.display()
  block18.display()
  block19.display()
  block20.display()
  monster.display()
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}


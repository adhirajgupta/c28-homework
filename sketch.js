const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var box1,box2,box3,box4,box5,box6,box7,box8,box9;

var ground1,ground2,ground3,ground4;

var sling1;

var circle;

var platform1,platform2,platform3;

function setup(){

createCanvas(1450,700);

engine = Engine.create();
world = engine.world;

box1 = new Box(330,140,100,50);
box2 = new Box(450,140,100,50);
box3 = new Box(400,100,100,50);
box4 = new Box(400,70,50,50);

box5 = new Box(810,440,100,50);
box6 = new Box(900,440,100,50);
box7 = new Box(850,400,100,50);
box8 = new Box(850,350,50,50);

box9 = new Box(1150,250,100,50);
box10 = new Box(1250,250,100,50);
box11 = new Box(1200,200,100,50);
box12 = new Box(1200,150,50,50);

ground1 = new Ground(725,700,1450,70);
ground2 = new Ground(1450,350,50,750);
ground3 = new Ground(0,350,50,750);
ground4 = new Ground(725,0,1450,50);

platform1 = new Ground(400,200,400,50);
platform2 = new Ground(850,500,400,50);
platform3 = new Ground(1200,300,400,50);

//sling1 = new SlingShot(platform.body,{x:0,y:400});

}

function draw(){

background("black");

Engine.update(engine);
Engine.run(engine);


box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();

ground1.display();
ground2.display();
ground3.display();
ground4.display();

//sling1.display(); 

platform1.display();
platform2.display();
platform3.display();

drawSprites();

}
/*function mouseDragged(){
Matter.Body.setPosition(box1.body, {x: mouseX , y: mouseY});
}

function keyPressed(){
if(keyCode===32){
sling1.attach(box1);
}
}


function mouseReleased(){
sling1.fly();
}*/
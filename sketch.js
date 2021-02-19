
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;
var stone1,stone2,stone3;
var rubber1,rubber2,rubber3,rubber4,rubber5;
var ground;

var hammer;


function setup() {
  createCanvas(1200,400);
 

myengine = Engine.create(); //.world
myworld = myengine.world;

ground = new GROUND(600,390);

stone1 = new STON(700,250,70,70);
stone2 = new STON(800,320,50,50);
stone3 = new STON(200,320,20,20);

rubber1 = new RUBBER(920,320,40,70,30);
rubber2 = new RUBBER(600,350,50,30,30);
rubber3 = new RUBBER(920,240,20,10,10);
rubber4 = new RUBBER(100,310,20,40,40);
rubber5 = new RUBBER(300 ,320,30,20,20);

hammer = new HAMMER(100 ,100);

}

function draw() {
  background("cyan");  

  Engine.update(myengine);

  stone1.display();
  stone2.display();
  stone3.display();

  rubber1.display();
  rubber2.display();
  rubber3.display();
  rubber4.display();
  rubber5.display();

  hammer.display();

  ground.Anushka();


  
}






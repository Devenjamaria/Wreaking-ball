const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;
var box1;
var box2;

function setup(){
    var canvas = createCanvas(1400,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,600,800,20);

    box1 = new Box(600,420,70,70);
    box2 = new Box(620,320,70,70);
    /*box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);*/
    

}

function draw(){
    background("black");
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    /*box3.display();
    box4.display();
    

    box5.display();*/
    

}
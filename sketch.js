const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var myEngine, myWorld;
var tower, towerImg, backgroundImg;
var ground;
var cannon;
var angle;

function preload()
{
    towerImg = loadImage("assets/tower.png");
    backgroundImg = loadImage("assets/background.gif");
}

function setup(){
    createCanvas(1200,600);
    myEngine = Engine.create();
    myWorld = myEngine.world;

    //object out of the class
    tower = new Tower(150, 340, 180, 330);

    ground = new Ground(600,height-1,1200,1);

    angle = -PI/4
    cannon = new Cannon(180, 110, 100, 50, angle);
    
    
}

function draw(){
    background(backgroundImg);
    Engine.update(myEngine);

    tower.display();
    ground.display();
    cannon.display();
   
}











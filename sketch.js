const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ground,division;
var plinko=[];
var particle=[];
var score=0;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(400,790,800,20);
  division1=new Division(80,750,20,300);
  division2=new Division(200,750,20,300);
  division3=new Division(320,750,20,300);
  division4=new Division(440,750,20,300);

  for(var j=15; j<=width; j=j+50){
    plinko.push(new Plinko(j,75))
  }
  for(var j=50; j<=width; j=j+50){
    plinko.push(new Plinko(j,175))
  }
  for(var j=15; j<=width; j=j+50){
    plinko.push(new Plinko(j,275))
  }
  for(var j=50; j<=width; j=j+50){
    plinko.push(new Plinko(j,375))
  }
  for(var j=50; j<=width; j=j+50){
    plinko.push(new Plinko(j,475))
  }
  for(var j=50; j<=width; j=j+50){
    plinko.push(new Plinko(j,575))
  }
 
  Engine.run (engine)

}

function draw() {
  background(0);  
  for(var j=0; j<plinko.length; j++){
    plinko[j].display();
  }
 
 ground.display();
 division1.display();
 division2.display();
 division3.display();
 division4.display();
 if(frameCount%60===0){
  particle.push(new Particles(random (width/2-10, width/2+10),10,10))
 }
 for(var i=0; i<particle.length; i++){
  particle[i].display();
  
  score= score+1


 }
fill ("white")
 text("score "+ score, 40,20);

}
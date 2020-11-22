
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;

function preload(){
  
monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  monkey=createSprite(90,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
}


function draw() {
  background(250);
  fill("black");
  textSize(15);
  text("Survival time:"+score,260,50);
  score = Math.ceil(frameCount/frameRate());
  if(ground.x<0){
     ground.x=ground.width/2;
  }
  
  if(keyDown("space")&&monkey.y>=50){
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  FoodGr();
  obstacleGr();
  drawSprites();
}
function FoodGr(){
 if(frameCount%90===0){
   banana=createSprite(390,190,20,20);
   banana.y=Math.round(random(120,200));
   banana.addImage(bananaImage);
   banana.scale=0.1;
   banana.velocityX=-4;
   banana.lifetime=85;
   FoodGroup.add(banana); 
   }
}

function obstacleGr(){
  if(frameCount%200===0){
    obstacle=createSprite(350,327,20,20);
    obstacle.addImage(obstacleImage);
    obstacle .scale=0.1;
    obstacle .velocityX=-4;
    obstacle.lifetime=85;
    obstacleGroup.add(obstacle); 
}
}























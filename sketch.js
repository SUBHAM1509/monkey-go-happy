
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  
  
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
 
  FoodGroup = createGroup();
  obstacleGroup = new Group ();
  
  
  score=0;
  
}


function draw() {
background("white")
 stroke("black")
 textSize(20)
 fill("black")
 score=Math.ceil(frameCount/frameRate())
 text("Survival Time : "+score,100,50)
  
  
  Bananas();
  Obstacle();
  
  
  
  
  
  console.log(ground.x)
  ground.x=ground.width/2
  
  monkey.collide(ground)
  
  
    //jump when the space key is pressed
    if(keyDown("space")) {
        monkey.velocityY = -12;
       
    }
    
    if(monkey.isTouching(obstacleGroup)) {
    obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
      
     
     obstacleGroup.setVelocityXEach(0);
     FoodGroup.setVelocityXEach(0);    
      monkey.VelocityX=0
       monkey.VelocityY=0
    }
  
  
  
  //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  drawSprites();
}

function Bananas() {
  if(frameCount %80 ===0) {
  banana=createSprite(400,200,20,20)
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-6
  banana.lifetime=100
  FoodGroup.add(banana)
  
  }


}

function Obstacle () {
  if(frameCount %300 === 0) {
     
  obstacle=createSprite(400,330,20,20)
  obstacle.addImage(obstacleImage)
  obstacle.scale=0.1
  obstacle.velocityX=-6
  obstacle.lifetime=100
    obstacleGroup.add(obstacle)
  }
  
  
  
 
  
  
}



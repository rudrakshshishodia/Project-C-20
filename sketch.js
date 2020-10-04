var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);


  speed=random(55,90);
  weight=random(1500,400);
  background(255,255,255);  

  car=createSprite(70,80,100,50);
 
  wall=createSprite(1300,100,120,150);
  wall.shapeColor="black";
  
 
  car.velocityX = speed;
 
   
  Deformation=0.5*weight*speed*speed/225009;
 
  car.collide="wall";
 
 
  if (wall.x-car.x < (car.width+wall.width)/2 ) 
  {
    car.velocityX=0;
    var Deformation=0.5 * weight * speed * speed/22509;
    if (Deformation>180) 
    {
      car.shapeColor=color(255,0,0);
    }
 
    if (Deformation<180 && Deformation>100) 
    {
      car.shapeColor=color(230,230,0);
    }
 
    if (Deformation<100) 
    {
      car.shapeColor=color(0,255,0);
    }
  }
  
}

function draw() {
  

  drawSprites();
}
var fir,mor;





function setup() {
  createCanvas(1200,800);
  fir=createSprite(400, 100, 50, 150);
  mor=createSprite(400,800,80,30);
fir.shapeColor="red";
mor.shapeColor="red";
fir.velocityY=2;
mor.velocityY=-2;

}

function draw() {
  background(255,255,255);
  
    if(mor.x-fir.x<mor.width/2+fir.width/2&&fir.x-mor.x<mor.width/2+fir.width/2){
    mor.velocityX=mor.velocityX*(-1);
    fir.velocityX=fir.velocityX*(-1);

    }
    if(mor.y-fir.y<mor.height/2+fir.height/2&&fir.y-mor.y<mor.height/2+fir.height/2){
     mor.velocityY=mor.velocityY*(-1);
     fir.velocityY=fir.velocityY*(-1);


    }
  drawSprites();
}
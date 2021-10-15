var bgImg
var cuttingBoard,cuttingBoardImg;
var doughImg,dough;
var tomatoImg,tomato,tomato1,tomato2,tomato3,tomato4;
var onionImg,onion;
var tomatoSause,tomatoSauseImg;
var ovenImg,oven;

function preload(){
  bgImg=loadImage("images/1835.jpg");
  cuttingBoardImg=loadImage("images/cuttingBoard.png");
  tomatoImg=loadImage("images/tomato.png");
  onionImg=loadImage("images/onion slice.png");
  doughImg=loadImage("images/dough.png");
  tomatoSauseImg=loadImage("images/tomato sause.png");
  ovenImg=loadImage("images/oven.png");


}

function setup() {

  createCanvas(windowWidth,windowHeight);
  
  //cuttingBoard=createSprite(width-900,height-170, 50, 50);
  //cuttingBoard.addImage(cuttingBoardImg);

  
   
  oven=createSprite(width,-500,height-1000,50,50);
  oven.addImage(ovenImg);
  oven.scale=1;

  
  dough=createSprite(width-500,height-170,50,50);
  dough.addImage(doughImg);
  dough.scale=0.5;

  tomatoSause=createSprite(width-500,height-170,50,50);
  tomatoSause.addImage(tomatoSauseImg);
  tomatoSause.scale=0.7;
 

   tomato=createSprite(width-100,height-170,10,10);
   tomato.addImage(tomatoImg);
   tomato.scale=0.1; 
   tomato1=createSprite(width-100,height-170,10,10);
   tomato1.addImage(tomatoImg);
   tomato1.scale=0.1; 
   tomato2=createSprite(width-100,height-170,10,10);
   tomato2.addImage(tomatoImg);
   tomato2.scale=0.1; 
   tomato3=createSprite(width-100,height-170,10,10);
   tomato3.addImage(tomatoImg);
   tomato3.scale=0.1; 
   tomato4=createSprite(width-100,height-170,10,10);
   tomato4.addImage(tomatoImg);
   tomato4.scale=0.1; 

   onion=createSprite(width-200,height-170,10,10);
   onion.addImage(onionImg);
   onion.scale=0.1  ;


}


function draw() {
  background(bgImg);  
  

  drawSprites();
  if(mousePressedOver(tomato4)){
   tomato4.x=mouseX;
   tomato4.y=mouseY;

  }
  if(mousePressedOver(tomato3)){
    tomato3.x=mouseX;
    tomato3.y=mouseY;
 
   }
   if(mousePressedOver(tomato2)){
    tomato2.x=mouseX;
    tomato2.y=mouseY;
 
   }
   if(mousePressedOver(tomato1)){
    tomato1.x=mouseX;
    tomato1.y=mouseY;
 
   }
}


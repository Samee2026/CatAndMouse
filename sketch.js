//background
var garden , gardenImg;

// Cat and Mouse 
var cat , catImg1 , catImg2 , catImg3 , catImg4;
var mouse , mouseImg1 , mouseImg2 , mouseImg3 , mouseImg4;

function preload() {
  
   //garden background Image
   gardenImg.loadImage("garden.png");

   //Cat and Mouse Images
   catImg1.loadImage("cat1.png");
   catImg2.loadImage("cat2.png");
   catImg3.loadImage("cat3.png");
   catImg4.loadImage("cat4.png");

   mouseImg1.loadImage("mouse1.png");
   mouseImg2.loadImage("mouse2.png");
   mouseImg3.loadImage("mouse3.png");
   mouseImg4.loadImage("mouse4.png");
 }

function setup(){
    createCanvas(1000,800);

    //garden Sprite
    garden = createSprite(500,400);
       garden.addImage("background", gardenImg)

    //Mouse Sprite   
    mouse = createSprite(800,30)
       mouse.addImage("mouse1", mouseImg1);
       
    //Cat Sprite   
    cat = createSprite(400,30)
       cat.addImage("cat1", catImg1);
}

function draw() {
   background(255);
  
  // X position Logical Collision with Cat
  if(cat.x - mouse.x < (cat.width + mouse.width)/2  &&  mouse.x - cat.x <(cat.width + mouse.width)/2){
      mouse.addImage("mouse2", mouseImg2);
      cat.addImage("cat2", catImg2);
  }
  else{
      mouse.addImage("mouse3", mouseImg3);
      cat.addImage("cat3", catImg3);
  }
    keyPressed();
    drawSprites();
}


function keyPressed(){

  //if KeyDown Left Arrow is Pressed on Keyboard
  if(keyCode === LEFT_ARROW){
     mouse.addImage("mouse4", mouseImg4);
     cat.addImage("cat4", catImg4);

  }


}

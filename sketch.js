
var ninja;
//var run1,run2,run3,run4,run5,run6,run7,run8,run9;
//var background1,background2;
var obstical;
var backgroundgame
var running_img,invisibleGround
var score=0

function preload(){
runimg01=loadAnimation("Run__000.png","Run__001.png","Run__002.png","Run__004.png","Run__005.png","Run__006.png","Run__007.png","Run__008.png","Run__009.png");

scoring_sound=loadSound("SOUND game.mp3")

background1=loadImage("backgroung01.png");
Starimg=loadImage("Star.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);

ninja= createSprite(150,height-100,20,50);
  ninja.addAnimation("running",runimg01);
  
  ninja.scale = 0.3;

  invisibleGround = createSprite(width/2,height-10,width,22); 
  invisibleGround.visible = false
 
  starsGroup=new Group()
}

function draw() {
background(background1) 
 
if(keyDown("SPACE") && ninja.y  >= height-400) {
  //jumpSound.play( )
  ninja.velocityY = -10;
}
   ninja.velocityY = ninja.velocityY + 0.8

   for(var i=0;i<starsGroup.length;i++)
   {
     if(starsGroup.get(i).collide(ninja)){ 
      starsGroup.get(i).destroy();  
       score=score + 1
        scoring_sound.play()
   } }
  
  Stars();
  ninja.collide(invisibleGround);
  drawSprites();
  textSize(40)
  textFont("Comic Sans MS")
  fill("white")
  text("Score:"+ score,width-200,100)
}

function Stars() { 
  if (frameCount % 150 === 0) {
    var star= createSprite(width,height-300,40,10);
  
    star.y = Math.round(random(height-400,height-300));
    star.addImage(Starimg);
    star.scale = 0.5;
    star.velocityX = -6;
       
    star.depth = ninja.depth;
    ninja.depth = ninja.depth + 1;
      
    starsGroup.add(star);
  }
  
}
var playerimg;
var monster1img;
var monster2img;
var monster3img;
var monster4img;
var monster5img;
var batteryimg1;
var batteryimg2;
var monster1,monster2,monster3,monster4,monster5;
var player;
var chargedBattery,dischargedBattery;




function preload(){
  playerimg = loadImage("assets/player.png");
  monster1img = loadImage("assets/mons-1.png");
  monster2img = loadImage("assets/mons-2.png");
  monster3img = loadImage("assets/mons-3.png");
  monster4img = loadImage("assets/mons-4.png");
  monster5img = loadImage("assets/mons-5.png");
  batteryimg1 = loadImage("assets/charged battery.png");
  batteryimg2 = loadImage("assets/discharged battery.png");


}

function setup() {
  createCanvas(600, 600);

monster1 = createSprite(random(50,200),random(50,200));
monster1.addImage(monster1img);
monster1.scale=0.2;

monster2 = createSprite(random(400,550),random(50,550));
monster2.addImage(monster2img);
monster2.scale = 0.2;

monster3 = createSprite(random(50,200),random(400,550));
monster3.addImage(monster3img);
monster3.scale = 0.2;

monster4 = createSprite(random(400,550),random(400,550));
monster4.addImage(monster4img);
monster4.scale = 0.2;

monster5 = createSprite(random(50,550),random(50,550));
monster5.addImage(monster5img);
monster5.scale = 0.2;

player = createSprite(random(200,400),random(200,400));
player.addImage(playerimg);
player.scale = 0.2;

for (var i=0 ; i<7 ; i++ ){

  for (var j=0 ; j<7 ; j++){

    chargedBattery = createSprite(i * 100,j * 100,10,10);
    if(i%2==0){
      chargedBattery.addImage(batteryimg1);
      chargedBattery.scale = 0.05
    }
    else{
      chargedBattery.addImage(batteryimg2);
      chargedBattery.scale = 0.05;
    }
    
  }
  
}




  
  

  

  
}

function draw() {
  background(200);
  
 

    drawSprites();

 }

  
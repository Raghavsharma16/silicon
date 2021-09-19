var bg,bgImage;
var handel;
var nobita,nobitaImage;
var gian,gianImage;
var gianSinging,gianSingingImage;
var teacher,teacherImage;
var kaminari,kaminariImage;
var anyWhereDoor,anyWhereDoorImage;
var bCoptor,bCoptorImage;
var border1,border2,border3,border4;
var go,goImg;
var homeBg,homeBgImg;
var dot1,dot2;
var yw,ywImage;
var bg2,bg2Img;
var restart,restartImg;
var start1,start1Img;
var suneo,suneoImg;
var gMom,gMomImg;
var bg3,bg3Img;
var gameState = 0;
var gameState = 1;
var gameState = 2;
var gameState=3;
var gameState=4;
var PLAY=1;
var END=0;
var SERVE=2;
var HOME=3;
var L2=4;

function preload() {
bgImage=loadImage("bg.jpg");
nobitaImage=loadImage("Nobita.png");
gianImage=loadImage("gian angry.png");
gianSingingImage=loadImage("gian singing.png");
kaminariImage=loadImage("kaminari.png");
teacherImage=loadImage("teacher.png");
bCoptor=loadImage("bcoptor.png");
anyWhereDoorImage=loadImage("any where door.png");
goImg=loadImage("go.jpg");
ywImage=loadImage("you win.jpg");
restartImg=loadImage("restart.jpg");
homeBgImg=loadImage("bg3.jpg");
start1Img=loadImage("start.png");
suneoImg=loadImage("suneo.png");
gMomImg=loadImage("gmom.png");
bg2Img=loadImage("bg2.jpg");

}
function setup(){
createCanvas(800,500);
bg=createSprite(400,250);
bg.addImage(bgImage);
bg.scale=0.23;

anyWhereDoor=createSprite(700,350);
anyWhereDoor.addImage(anyWhereDoorImage);
anyWhereDoor.scale=0.8;

nobita=createSprite(70,430);
nobita.addImage(nobitaImage);
nobita.scale=0.3;

gian=createSprite(750,250);
gian.addImage(gianImage);
gian.scale=0.6;

teacher=createSprite(640,50);
teacher.addImage(teacherImage);
teacher.scale=0.4;



dot1=createSprite(640,50,5,5);
dot2=createSprite(750,250,5,5);
handel=createSprite(770,360,10,10);
border1=createSprite(400,-35,800,5);
border1.shapeColor="Black"
border2=createSprite(400,535,800,5);
border2.shapeColor="Black"
border3=createSprite(-45,250,5,500);
border3.shapeColor="Black"
border4=createSprite(835,250,5,500);
border4.shapeColor="Black"

go=createSprite(380,230,800,250);
go.addImage(goImg);
go.visible = false;
go.scale=0.5;

yw=createSprite(420,250,800,250);
yw.addImage(ywImage);
yw.visible = false;
yw.scale=3;

restart=createSprite(400,250,800,500);
restart.addImage(restartImg);
restart.visible= false;
homeBg=createSprite(400,250,800,500);
homeBg.addImage(homeBgImg);
homeBg.scale=3;
homeBg.visible=false;

start1=createSprite(400,250);
start1.addImage(start1Img);
start1.scale=0.7;
start1.visible=false;

suneo=createSprite(270,50);
suneo.addImage(suneoImg);
suneo.visible = false;
suneo.scale=0.7;

gMom=createSprite(80,80)
gMom.addImage(gMomImg);
gMom.visible = false;
gMom.scale=0.6;

gianSinging=createSprite(700,400);
gianSinging.addImage(gianSingingImage);
gianSinging.visible=false;

bg2=createSprite(400,250);
bg2.addImage(bg2Img);
bg2.visible = false;
}

function draw() {
background(0);
textSize(15);
fill("black");
if(gameState===3){
  homeBg.visible=true;
start1.visible=true;
suneo.visible=false;
gMom.visible = false;
gianSinging.visible=false;
    if(keyDown("SPACE")){
        gameState=2;
    }

}



if(gameState===2){
    background("0");
    start1.visible=false;
    homeBg.visible=false;
    suneo.visible=false;
    gMom.visible = false;
    gianSinging.visible=false;
text("Welcome to nobita Escape Game",0,50);
text("Here you have to escape from Gian and Nobita's Teacher and another problemns",0,200);
text("CONTROLS INFORMATION : USE ARROW KEYS TO MOVE AND SPACE TO BREAK AND ENTER TO START GAME",0,250);
text("You have to use doraemon Gadgets to escape provided by us",0,300);
text ("BEST OF LUCK AND HAVE FUN",0,350);
if(keyDown("ENTER")){
    gameState=1;
}
}

if(gameState===1){
    start1.visible=false;
    homeBg.visible=false;
    suneo.visible=false;
    gMom.visible = false;
    gianSinging.visible=false;
    if(gian.x===750){
        gian.velocityX=-5;
    }
    
    if(gian.x===50){
        gian.velocityX=5;
    }
    if(dot2.x===750){
        dot2.velocityX=-5;
    }
    
    if(dot2.x===50){
        dot2.velocityX=5;
    }
    if(teacher.y===450){
        teacher.velocityY=-5;
    }
    
    if(teacher.y===50){
        teacher.velocityY=5;
    }
    if(dot1.y===450){
        dot1.velocityY=-5;
    }
    
    if(dot1.y===50){
        dot1.velocityY=5;
    }
    if(keyDown(UP_ARROW)){
        nobita.velocityY=-3;
    }
    if(keyDown(DOWN_ARROW)){
        nobita.velocityY=3;
    }
    if(keyDown(LEFT_ARROW)){
        nobita.velocityX=-3;
    }
    if(keyDown(RIGHT_ARROW)){
        nobita.velocityX=3;
    }
    if(nobita.isTouching(border1)){
        nobita.velocityY=1;
    }
    if(nobita.isTouching(border2)){
        nobita.velocityY=-1;
    }
    if(nobita.isTouching(border3)){
        nobita.velocityX=1;
    }
    if(nobita.isTouching(border4)){
        nobita.velocityX=-1;
    }
    if(keyDown("SPACE")){
        nobita.velocityX=0;
        nobita.velocityY=0;
    }
    
    if(nobita.isTouching(dot1)){
    go.visible = true;
    nobita.velocityX=0;
    nobita.velocityY=0;
    gameState=0;
    }
    if(nobita.isTouching(dot2)){
        go.visible = true;
        nobita.velocityX=0;
        nobita.velocityY=0;
        gameState=0;
        }
    
    
    if(nobita.isTouching(handel)){
        yw.visible = true;
        dot1.velocityY=0;
        dot2.velocityX=0;
        teacher.velocityY=0;
        gian.velocityX=0;
        nobita.velocityX=0;
        nobita.velocityY=0;
        gameState = 4;
    }
 
        
}
if(gameState===0){
restart.visible = true;
nobita.velocityX=0;
nobita.velocityY=0;
dot1.velocityY=0;
dot2.velocityX=0;
teacher.velocityY=0;
if(keyDown("R")){
    gameState=1;
}
}
if(gameState===4){
suneo.visible=true;
gMom.visible = true;
gianSinging.visible=true;
bg2.visible=true;
if(keyDown(UP_ARROW)){
    nobita.velocityY=-3;
}
if(keyDown(DOWN_ARROW)){
    nobita.velocityY=3;
}
if(keyDown(LEFT_ARROW)){
    nobita.velocityX=-3;
}
if(keyDown(RIGHT_ARROW)){
    nobita.velocityX=3;
}
if(nobita.isTouching(border1)){
    nobita.velocityY=1;
}
if(nobita.isTouching(border2)){
    nobita.velocityY=-1;
}
if(nobita.isTouching(border3)){
    nobita.velocityX=1;
}
if(nobita.isTouching(border4)){
    nobita.velocityX=-1;
}
if(keyDown("SPACE")){
    nobita.velocityX=0;
    nobita.velocityY=0;
}

}

   



drawSprites();
}


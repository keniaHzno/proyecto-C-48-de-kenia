var fondo;
var mario, marioImg;
var bomba,bombaImg,corazonImg,explocionImg;
var Corazon1,Corazon2,Corazon3,Corazon4;
var corazon=4;
var dona,donaImg;
var p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15
,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29
,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40,
p41,p42,p43,p44,p45,p46,p47,p48,p49,p50;

var marioGris;

function preload(){

//fondo=loadImage("images/mapa.png");
marioImg=loadAnimation("images/mario2.png");
marioGris=loadAnimation("images/marioGris.png");
bombaImg=loadAnimation("images/bomba.png");
explocionImg=loadAnimation("images/explocion.png");
corazonImg=loadImage("images/corazon.png");
donaImg=loadImage("images/dona.png");
}
function setup(){
createCanvas(800,400);
  mario=createSprite(400,200,20,20);
  mario.addAnimation("mario",marioImg);
  mario.addAnimation("marioGris",marioGris);
  mario.scale=0.08;

  bomba=createSprite(500,100,20,20);
  bomba.addAnimation("bomba",bombaImg);
  bomba.addAnimation("explocion",explocionImg);
  bomba.scale=0.08;
  bomba.visible=false;
  bomba.lifetime=300;


  dona=createSprite(200,300,20,20);
  dona.addImage(donaImg);
  dona.scale=0.02;

  Corazon1=createSprite(400,16,20,20);
  Corazon1.addImage(corazonImg);
  Corazon1.scale=0.02;

  Corazon2=createSprite(375,16,20,20);
  Corazon2.addImage(corazonImg);
  Corazon2.scale=0.02;

  Corazon3=createSprite(350,16,20,20);
  Corazon3.addImage(corazonImg);
  Corazon3.scale=0.02;


  Corazon4=createSprite(325,16,20,20);
  Corazon4.addImage(corazonImg);
  Corazon4.scale=0.02;


  p1=new pared(400,35,745,10);
  p2=new pared(400,370,745,10);
  p3=new pared(30,200,10,345);
  p4=new pared(770,200,10,345);

  p5=new pared(80,80,20,10);
  p6=new pared(155,80,40,10);
  p7=new pared(265,80,30,10);
  p8=new pared(340,80,40,10);
  p9=new pared(445,80,30,10);
  p10=new pared(530,80,40,10);
  p11=new pared(640,80,40,10);
  p12=new pared(720,80,30,10);

  p13=new pared(210,60,10,45);
  p14=new pared(400,85,10,100);
  p15=new pared(585,60,10,45);

  p16=new pared(70,125,70,10);
  p17=new pared(70,170,70,10);
  p18=new pared(70,215,70,10);
  p19=new pared(70,260,70,10);
  p20=new pared(80,305,100,10);

  p21=new pared(730,125,70,10);
  p22=new pared(730,170,70,10);
  p23=new pared(730,215,70,10);
  p24=new pared(730,260,70,10);
  p25=new pared(720,305,100,10);

  p26=new pared(210,125,70,10);
  p27=new pared(320,125,70,10);
  p28=new pared(480,125,70,10);
  p29=new pared(590,125,70,10);

  p30=new pared(210,170,140,10);
  p31=new pared(400,170,140,10);
  p32=new pared(590,170,140,10);

  p33=new pared(210,215,140,10);
  p34=new pared(400,215,140,10);
  p35=new pared(590,215,140,10);

  p36=new pared(210,260,70,10);
  p37=new pared(590,260,70,10);

  p38=new pared(210,305,70,10);
  p39=new pared(400,310,10,115);
  p40=new pared(590,305,70,10);

  p41=new pared(275,295,10,150);
  p42=new pared(525,295,10,160);

  p43=new pared(400,310,120,10);
  

  //dona.visible=false;
}
function draw(){
  background(0);

p1.display();
p2.display();
p3.display();
p4.display();

p5.display();
p6.display();
p7.display();
p8.display();
p9.display();
p10.display();
p11.display();
  p12.display();
  p13.display();
  p14.display();
  p15.display();
  p16.display();
  p17.display();
  p18.display();
  p19.display();
  p20.display();
  p21.display();
  p22.display();
  p23.display();
  p24.display();
  p25.display();
  p26.display();
  p27.display();
  p28.display();
  p29.display();
  p30.display();
  p31.display();
  p32.display();
  p33.display();
  p34.display();
  p35.display();
  p36.display();
  p37.display();
  p38.display();
  p39.display();
  p40.display();
  p41.display();
  p42.display();
  p43.display();
  


  if(keyDown("space")){
    bomba.visible=true;
  }

  if(mario.isTouching(bomba)){
     bomba.changeAnimation("explocion",explocionImg);
     corazon=corazon-1;
     Corazon4.visible=false;
     mario.changeAnimation("marioGris",marioGris);
  }
  mover();
 drawSprites();
}
////////////////////////////////////////////////////////////////////
function mover(){
  if(keyDown(UP_ARROW)){
mario.y=mario.y-2;
  }

if(keyDown(DOWN_ARROW)){
  mario.y=mario.y+2;
}
if(keyDown(LEFT_ARROW)){
  mario.x=mario.x-2;

}
if(keyDown(RIGHT_ARROW)){
  mario.x=mario.x+2;
}


}

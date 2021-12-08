var solo, soloImg;
var jaxon, jaxonImg;
var paredeEsquerda;
var paredeDireita;


function preload() 
{
  jaxonImg = loadAnimation("Runner-1.png","Runner-2.png");
  soloImg = loadImage("path.png");
}

function setup() 
{
  createCanvas(400,400);

  solo = createSprite(200,200,100,100);
  solo.invisible = true;
  solo.addImage(soloImg);
  solo.velocityY = 4;

  jaxon = createSprite(200,320,20,20);
  jaxon.addAnimation("Movimento Jaxon",jaxonImg);
  jaxon.scale = 0.08;

  paredeEsquerda = createSprite(60,380,20,400);
  paredeEsquerda.visible = false;

  paredeDireita = createSprite(340,380,20,400);
  paredeDireita.visible = false;
}

function draw() 
{
  background(0);
  
  jaxon.x = mouseX;

  jaxon.collide(paredeEsquerda);
  jaxon.collide(paredeDireita);

  if(solo.y > 400)
  {
    solo.y = solo.height/8;
  }

  drawSprites();
}
var path, runner, runner_running, edges, invisibleLeft1, invisibleRight2;
var pathImg, human;

function preload(){
  //pre-load images
  runner_running = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.scale = 1.2


  runner = createSprite(100,290,3,10)
  runner.addAnimation("man", runner_running)
  edges = createEdgeSprites()

  runner.scale = 0.1

  invisibleLeft1 = createSprite(0,0,100,400)
  invisibleLeft1.visible = false;

  invisibleRight2 = createSprite(400,0,100,400)
  invisibleRight2.visible = false;
}

function draw() {
  background("white");
 
  path.velocityY = 4;
  
  if(path.y > 400){
    path.y = height/4
  }
  
  runner.x = World.mouseX

  runner.collide(invisibleLeft1)
  runner.collide(invisibleRight2)
  drawSprites()
}

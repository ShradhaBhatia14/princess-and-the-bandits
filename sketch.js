var back,princess,castle,cat,cage,kidnapper,kidnapper2,cat2,cage2,flower,flower2,tiger,tiger2,fence,heart,heartGroup, back2,back3
var maze1,maze2,maze3,maze4,maze5,maze6,maze7,maze8,maze9,maze10,maze11,windmill1,windmill2,windmill3,windmill4,maze16,maze17,maze18,maze19,maze20, maze21
var backImage,princessImage,castleImage,castleImage,catImage,kidnapperImage,kidnapperImage2,catImage2,cageImage2,flowerImage,heartImage,flowerImage2,tigerImage,tigerImage2,fenceImage,backImage2,backImage3
var task=0;
var edges

var life=5;
function preload(){
  backImage=loadImage("images/background.jpg")
  cageImage=loadImage("images/cage.png")
  castleImage=loadImage("images/castle.png")
  princessImage=loadImage("images/princess.png")
  catImage=loadImage("images/cat2.png")
  kidnapperImage=loadImage("images/kidnapper.png")
  catImage2=loadImage("images/cat2.png")
  cageImage2=loadImage("images/cage.png")
  kidnapperImage2=loadImage("images/kidnapper.png")
  flowerImage=loadImage("images/flower.png")
  flowerImage2=loadImage("images/flower.png")
  tigerImage=loadImage("images/tiger.png")
  tigerImage2=loadImage("images/tiger.png")
  fenceImage=loadImage("images/fence.png")
  heartImage=loadImage("images/heart.png")
  backImage2=loadImage("images/back2.jpg")
  backImage3=loadImage("images/back3.jpg")
  }
  



function setup() {
  createCanvas(1200,750);
 // background 
   back = createSprite(600,400,1200,800);
back.addImage("background",backImage);
back.scale=3;
heartGroup=new Group();
//cat 2
cat2=createSprite(500,620,10,10);
cat2.addImage("cat2",catImage2);
cat2.scale=0.1;
//cage2
cage2=createSprite(600,620,10,10);
cage2.addImage("cage2",cageImage2);
cage2.scale=0.19;
//kidnapper
kidnapper=createSprite(1100,300,10,10)
kidnapper.addImage("kidnapper",kidnapperImage);
kidnapper.scale=0.3
//kidnapper2
kidnapper2=createSprite(100,300,10,10)
kidnapper2.addImage("kidnapper2",kidnapperImage);
kidnapper2.scale=0.3
//flower
flower=createSprite(1075,650,10,10)
flower.addImage("flower",flowerImage)
flower.scale=0.2
// flower2
flower2=createSprite(800,500,10,10)
flower2.addImage("flower2",flowerImage2)
flower2.scale=0.2;
//princess
princess = createSprite(50,50,10,10);
princess.addImage("princess",princessImage);
princess.scale=0.17;
//cat
cat=createSprite(900,600,10,10);
cat.addImage("cat",catImage)
cat.scale=0.1;
//cage
cage=createSprite(900,450,10,10)
cage.addImage("cage",cageImage)
cage.scale=0.2
// castle
 castle = createSprite(600,480,10,10);
castle.addImage("castle",castleImage);
castle.scale=0.3;
//tiger
tiger=createSprite(800,720,10,10)
tiger.addImage("tiger",tigerImage)
tiger.scale=0.3
//tiger2
tiger2=createSprite(400,720,10,10)
tiger2.addImage("tiger2",tigerImage2)
tiger2.scale=0.3
//fence
fence=createSprite(810,450,10,10)
fence.addImage("fence",fenceImage)
fence.scale=0.27




edges=createEdgeSprites();
 maze1 =createSprite(585,580,200,10);
 maze2=createSprite(750,490,10,170);
 maze3=createSprite(620,400,270,10);
 maze4=createSprite(490,490,10,170);
 maze5=createSprite(630,300,468,10);
 maze6=createSprite(400,490,10,380);
 maze7=createSprite(630,680,468,10);
 maze8=createSprite(860,540,10,280);
 maze9 =createSprite(300,450,10,480);
 maze10=createSprite(630,212,670,10);
 maze11=createSprite(959,450,10,487);
 windmill3=createSprite(1075,500,125,10);
 windmill4=createSprite(1075,500,10,125);
windmill1=createSprite(100,500,125,10);
 windmill2=createSprite(100,500,10,125);
 maze16=createSprite(600,100,10,100);
 maze17=createSprite(800,100,10,100);
 maze18=createSprite(1000,100,10,100);
 maze19=createSprite(400,100,10,100);
 maze20=createSprite(200,100,10,100);
 maze21=createSprite(347,690,100,10);
 maze17.velocityY=5;
maze19.velocityY=5;
tiger.velocityX=5;
tiger2.velocityX=-5;

maze1.shapeColor=("red");
maze2.shapeColor=("red");
maze3.shapeColor=("red");
maze4.shapeColor=("red");
maze5.shapeColor=("red");
maze6.shapeColor=("red");
maze7.shapeColor=("red");
maze8.shapeColor=("red");
maze9.shapeColor=("red");
maze10.shapeColor=("red");
maze11.shapeColor=("red");
windmill1.shapeColor=("white");
windmill2.shapeColor=("white");
windmill3.shapeColor=("white");
windmill4.shapeColor=("white");
maze16.shapeColor=("white");
maze17.shapeColor=("white");
maze18.shapeColor=("white");
maze19.shapeColor=("white");
maze20.shapeColor=("white");
maze21.shapeColor=("red")

}

function draw() {

  background("white");
  createEdgeSprites();
  
  
if(keyDown("left")){
  princess.velocityX=-10;}
  
  if(keyDown("right")){
  princess.velocityX=10;}
  
  if(keyDown("up")){
  princess.velocityY=-10;}
  
  
  if(keyDown("down")){
  princess.velocityY=10;}
  
  if(keyWentUp("left")){
  princess.velocityX=0;}
  
  if(keyWentUp("right")){
  princess.velocityX=0;}
  
  if(keyWentUp("up")){
  princess.velocityY=0;}
  
  if(keyWentUp("down")){
  princess.velocityY=0;}
  
  
 
  for (var i = 0; i < life ; i++) {
    heart=createSprite(1150-i*30,90,10,10)
    heart.addImage("heart",heartImage)
    heart.scale=0.1
   heartGroup.add(heart) 
      }

      if(princess.isTouching(kidnapper)
      || 
      (princess.isTouching(kidnapper2)|| 
      (princess.isTouching(tiger) || 
      (princess.isTouching(tiger2)|| 
      (princess.isTouching(windmill1) || 
      (princess.isTouching(windmill2)|| 
      (princess.isTouching(windmill3)|| 
      (princess.isTouching(windmill4)|| 
      (princess.isTouching(maze16)||
      (princess.isTouching(maze17)|| 
      (princess.isTouching(maze18)|| (princess.isTouching(maze19)||
      (princess.isTouching(maze20)
      ))))))))))) )){
        life=life-1
        heartGroup.destroyEach(heart)
        princess.x=50
        princess.y=50
        
          }
if(keyDown("k")  ){
if(cat.isTouching(princess)){
  cat.x=900
  cat.y=450
life=life+1
task=task+1}
  if(cat2.isTouching(princess)){
cat2.x=600
cat2.y=620
life=life+1
task=task+1
  }
}
if (princess.isTouching(flower) ){
  life=life+1
  task=task+1;
  flower.destroy();
}
if(princess.isTouching(flower2)){
  life=life+1
  flower2.destroy();
  task=task+1
}

if (life===0){
  back2 = createSprite(700,500,1100,700);
back2.addImage("background2",backImage2);

}
if (princess.isTouching(castle) && task=== 4){
back3 = createSprite(600,500,1100,700);
back3.addImage("background3",backImage3);
back3.scale=3
maze17.velocityY=0;
maze19.velocityY=0;
tiger.velocityX=0;
tiger2.velocityX=0;
maze16.rotationSpeed=0;
maze18.rotationSpeed=0;
maze20.rotationSpeed=0;
windmill4.rotationSpeed=0;
  windmill3.rotationSpeed=0;
  windmill1.rotationSpeed=0;
  windmill2.rotationSpeed=0;
  kidnapper.visible=false
  kidnapper2.visible=false

}

  maze16.rotationSpeed=5;
  maze18.rotationSpeed=5;
  maze20.rotationSpeed=5;
  
  princess.bounceOff(edges[0]);
  princess.bounceOff(edges[1]);
  princess.bounceOff(edges[2]);
  princess.bounceOff(edges[3]);
 princess.bounceOff(maze1); 
  princess.bounceOff(maze2); 
  princess.bounceOff(maze3); 
  princess.bounceOff(maze4); 
  princess.bounceOff(maze5); 
  princess.bounceOff(maze6);
  princess.bounceOff(maze7);
  princess.bounceOff(maze8);
  princess.bounceOff(maze9);
  princess.bounceOff(maze10);
  princess.bounceOff(maze11);
  princess.bounceOff(windmill1);
  princess.bounceOff(windmill2);
  princess.bounceOff(windmill3);
  princess.bounceOff(windmill4);
  princess.bounceOff(maze16);
  princess.bounceOff(maze17);
  princess.bounceOff(maze18);
 princess.bounceOff(maze19);
  princess.bounceOff(maze20);
  princess.bounceOff(maze21);
  tiger.bounceOff(edges[0])
  tiger2.bounceOff(edges[0])
  tiger.bounceOff(edges[1])
  tiger2.bounceOff(edges[1])
  maze19.bounceOff(edges[2]);
  maze19.bounceOff(maze10);
  maze17.bounceOff(edges[2]);
  maze17.bounceOff(maze10);
  princess.bounceOff(fence);
  
  princess.setCollider("rectangle",-45,-25,120,160);
  windmill4.rotationSpeed=-5;
  windmill3.rotationSpeed=-5;
  windmill1.rotationSpeed=-5;
  windmill2.rotationSpeed=-5;
  


drawSprites();
if (princess.isTouching(cat) || princess.isTouching(cat2)){
  textSize(16)
  noStroke()
  fill("#37471F")
  text(" Press the key 'k' to kick the cat in the cage",500,200)
  
}
if (princess.isTouching(castle) && task<4){
  
textSize(16)
fill("white")
text("Please  put all the cats in cages and collect the flowers  to enter the castle ",400,200)
}  
}
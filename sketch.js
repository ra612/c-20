var mr,fr;




function setup() {
  createCanvas(800,400);
  
mr=createSprite(600,200,100,50);
mr.shapeColor="blue"
fr=createSprite(300,100,50,100);
fr.shapeColor="red";


}

function draw() {
  background("yellow");  
  mr.x=World.mouseX;
  mr.y=World.mouseY;
  if(fr.x-mr.x<fr.width/2+mr.width/2
    &&mr.x-fr.x<mr.width/2+fr.width/2
    &&mr.y-fr.y<mr.width/2+fr.width/2
    &&fr.y-mr.y<fr.width/2+mr.width/2){
mr.shapeColor="cyan";
fr.shapeColor="cyan"; 

}
else{
  mr.shapeColor="blue";
fr.shapeColor="red";
}  
  drawSprites();
}
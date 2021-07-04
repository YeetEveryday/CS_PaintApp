//commented out region is my attempt at making a brush type with drag shapes, like the kind found on proffessional paint apps

mc=0
penwidth=15
let r,g,b
ms = 1
//let Xcor, Ycor, Xrel, Yrel
lineDRAW = 0
rectDRAW = 1
circleDRAW = 1
function setup() {
  createCanvas(600, 600);
  background(220);
  colour = 1
}

//function mouseClicked(){
  //Xcor = mouseX
  //Ycor = mouseY
//}
//function mouseReleased(){
  //Xrel = mouseX
  //Yrel = mouseY
//}

function draw() {
  
  stroke(mc);
  strokeWeight(ms)
  fill(mc)
  
  //drawing mechanism
  if (mouseIsPressed && 103<mouseY && mouseY<530 && lineDRAW == 0) {
    //mouseClicked()
    //mouseReleased()
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  
  if (mouseIsPressed && 103<mouseY && mouseY<530 && rectDRAW == 0) {
    rect(mouseX,mouseY,penwidth,penwidth)
  }
  
  if (mouseIsPressed && 103<mouseY && mouseY<530 && circleDRAW == 0) {
    ellipse(mouseX,mouseY,penwidth,penwidth)
  }
  if (rectDRAW == 1 && lineDRAW == 1 && circleDRAW == 1 && mouseIsPressed && 103<mouseY && mouseY<530){
    for (brushWidth = -40; brushWidth <= 40; 
      brushWidth += 2){
      ellipse( mouseX + brushWidth , mouseY, 1, 1)
    }
  }
  
  //if (mouseIsPressed && 103<mouseY && mouseY<530 && rectDRAW == 0) {
    //mouseClicked()
    //mouseReleased()
    //rect(Xcor, Ycor, Xrel - Xcor, Yrel - Ycor);
  //}  
  //if (mouseIsPressed && 103<mouseY && mouseY<530 && circleDRAW == 0) {
    //ellipse((Xcor+Xrel)/2, (Ycor+Yrel)/2, (Xrel - Xcor)/2, (Yrel - Ycor)/2);
  //}
  strokeWeight(0)
  fill('green' )
  ellipse(574,574,50,50)
  distance = dist(574,574,mouseX,mouseY)
  radius = 50/2
  if(distance < radius && mouseIsPressed){
    mc = 'green'
  } 
  
  fill('red' )
  ellipse(523,574,50,50)
  distance = dist(523,574,mouseX,mouseY)
  radius = 50/2
  if(distance < radius && mouseIsPressed){
    mc = 'red'
  } 
  
  fill('blue' )
  ellipse(472,574,50,50)
  distance = dist(472,574,mouseX,mouseY)
  radius = 25
  if(distance < radius && mouseIsPressed){
    mc = 'blue'
  }
  
  fill('purple' )
  ellipse(421,574,50,50)
  distance = dist(421,574,mouseX,mouseY)
  radius = 25
  if(distance < radius && mouseIsPressed){
    mc = 'purple'
  }
  
  fill('black' )
  ellipse(370,574,50,50)
  distance = dist(370,574,mouseX,mouseY)
  radius = 25
  if(distance < radius && mouseIsPressed){
    mc = 'black'
  }
  fill(4,
       7,98)
  quad(0,0,100,0,100,50,0,50)
  fill(84,90,255)
  textSize(40)
  textAlign(CENTER)
  text('Clear',50,50)
  if(100>mouseX>0 && 50>mouseY>0 && mouseIsPressed){
    background(220)
  }
  
  fill(4,7,98)
  quad(110,0,210,0,210,50,110,50)
  fill(84,90,255)
  textSize(40)
  textAlign(CENTER)
  text('Erase',160,50)
  if (110<mouseX && mouseX<220 && 0<mouseY && mouseY<50 && mouseIsPressed){
    mc = 220
  }
  
  fill(4,7,98)
  quad(220,0,420,0,420,50,220,50)
  fill(84,90,255)
  textSize(30)
  textAlign(CENTER)
  text('Random colour',320,50)
  if (220<mouseX && mouseX<420 && 0<mouseY && mouseY<50 && mouseIsPressed){
    r= random(0,255);
    g= random(0,255);
    b= random(0,255);
    mc = color(r,g,b);
  }
  
  fill(4,7,98)
  quad(0,52,100,52,100,102,0,102)
  fill(84,90,255)
  textSize(40)
  textAlign(CENTER)
  text('Rect',50,102)
  if (0<mouseX && mouseX<100 && 52<mouseY && mouseY<102 && mouseIsPressed){
    lineDRAW = 1
    rectDRAW = 0
    circleDRAW = 1
  }
  
  fill(4,7,98)
  quad(110,52,210,52,210,102,110,102)
  fill(84,90,255)
  textSize(40)
  textAlign(CENTER)
  text('Circle',160,102)
  if (110<mouseX && mouseX<220 && 52<mouseY && mouseY<102 && mouseIsPressed){
    lineDRAW = 1
    rectDRAW = 1
    circleDRAW = 0
  }
  
  fill(4,7,98)
  quad(220,52,330,52,330,102,220,102)
  fill(84,90,255)
  textSize(40)
  textAlign(CENTER)
  text('Line',275,102)
  if (220<mouseX && mouseX<330 && 52<mouseY && mouseY<102 && mouseIsPressed){
    lineDRAW = 0
    rectDRAW = 1
    circleDRAW = 1
  }
  
  fill(4,7,98)
  quad(340,52,600,52,600,102,340,102)
  fill(84,90,255)
  textSize(40)
  textAlign(CENTER)
  text('Special Stroke',470,95)
  if (340<mouseX && mouseX<600 && 52<mouseY && mouseY<102 && mouseIsPressed){
    lineDRAW = 1
    rectDRAW = 1
    circleDRAW = 1
  }
  
  noStroke()
  fill(0)
  textSize(20)
  textAlign(LEFT)
  text('Brush Size (1 to 5)',0,594)
  
  textAlign(CENTER)
  fill(255)
  ellipse(21,553,35,35)
  fill(0)
  text('1',20,560)
  distance = dist(21,553,mouseX,mouseY)
  radius = 25
  if(distance < radius && mouseIsPressed){
    ms = 1
  }

  textAlign(CENTER)
  fill(255)
  ellipse(57,553,35,35)
  fill(0)
  text('2',57,560)
  distance = dist(57,553,mouseX,mouseY)
  radius = 25
  if(distance < radius && mouseIsPressed){
    ms = 2
  }
  
  textAlign(CENTER)
  fill(255)
  ellipse(93,553,35,35)
  fill(0)
  text('3',93,560)
  distance = dist(93,553,mouseX,mouseY)
  radius = 25
  if(distance < radius && mouseIsPressed){
    ms = 3
  }
  
  textAlign(CENTER)
  fill(255)
  ellipse(129,553,35,35)
  fill(0)
  text('4',129,560)
  distance = dist(129,553,mouseX,mouseY)
  radius = 25
  if(distance < radius && mouseIsPressed){
    ms = 4
  }
  
  textAlign(CENTER)
  fill(255)
  ellipse(165,553,35,35)
  fill(0)
  text('5',165,560)
  distance = dist(165,553,mouseX,mouseY)
  radius = 25
  if(distance < radius && mouseIsPressed){
    ms = 5
  }
} 
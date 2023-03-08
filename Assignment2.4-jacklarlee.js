function setup() {
  createCanvas(600, 300);
}

function draw() {
  background(" #3F51B5");
//top
  fill("#FFEB3B")
  rect(0,0,1000,100)
  fill("white")
  rect(0,71,1000,160)
  fill("red")
   rect(0,90,1000,120)
  //Left
  fill("#3E9042")
  triangle(0,0,200,150,0,300)
//Moon
  noFill()
  fill("#FFC107")
  ellipse(60,150,100,125,100)
  noFill(100)
  strokeWeight(0)
  fill("#3E9042")
  ellipse(80,147,90,110,200)
  //star
translate(50,80)
  scale(.2)
  fill("#FFC107")
  beginShape();
  vertex(330,180)
  vertex(250,180)
  vertex(220,95)
  vertex(180,180)
  vertex(100,180)
  vertex(165,235)
  vertex(140,305)
  vertex(215,265)
  vertex(290,305)
  vertex(265,235)
  endShape(CLOSE);
}
//Camaros and South Sudan 

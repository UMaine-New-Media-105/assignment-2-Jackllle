function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(86, 100, 100);
  drawLetter(100, 100, 100, 100);
  if (mouseX > 150) {
    filter(INVERT);
  } else {
  }
}
//letter
function drawLetter() {
  fill("hsl( 300, 30%, 80% )");
  rect(0, 0, 80);
  rect(80, 0, 80);
  rect(160, 0, 80);
  rect(240, 0, 80);
  rect(320, 0, 80);
  rect(160, 80, 80);
  rect(160, 160, 80);
  rect(160, 240, 80);
  rect(160, 320, 80);
  rect(80, 320, 80);
  rect(0, 240, 80);
  //background'
  fill("hsl( 330, 30%, 39% )");
  rect(80, 80, 80);
  rect(0, 80, 80);
  rect(240, 80, 80);
  rect(320, 80, 80);
  fill("hsl( 330, 30%, 32% )");
  rect(80, 160, 80);
  rect(0, 160, 80);
  rect(240, 160, 80);
  rect(320, 160, 80);
  fill("hsl( 330, 30%, 25% )");
  rect(80, 240, 80);
  rect(320, 240, 80);
  rect(240, 240, 80);
  fill("hsl( 330, 30%, 18% )");
  rect(0, 320, 80);
  rect(320, 320, 80);
  rect(240, 320, 80);
}

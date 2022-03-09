//10print
let x = 0;
let y = 0;
let spacing = 10;

var r;
var b;
var g;

function setup() {
  createCanvas(400, 400);
  background = 0
  r = random(255)
  b = random(255)
  g = random(255)
}

/* This function draws one row at a time
and speeds up the drawing process */
function renderRow() {
  while (x < width) {
    if (random(1) < 0.5) {
      line(x, y, x + 10, y + spacing);
    } else {
      line(x, y + spacing, x + spacing, y);
    }
    x = x + spacing;
  }
}

function draw() {
  stroke(r, b, g);
  renderRow(); //draws one row at a time (much faster)
  if (x > width - 1) {
    x = 0;
    y = y + spacing;
  }

  //stops drawing after the canvas is filled
  if (y > height) {
    noLoop();
  }
}
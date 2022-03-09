//10print
let x = 0;
let y = 0;
let spacing = 10;

var r;
var g;
var b;

// Iterators that change the value of RGB
var i = 10;
var j = 10;
var k = 10;

function setup() {
  createCanvas(400, 400);
  background(0);
  r = random(140, 255);
  g = random(140, 255);
  b = random(140, 255);
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

//This function changes the values of RGB based on their respective iterators (i, j, and k)
function interateRGB() {
  //Bound r, g, and b between pastel values 140-255
  if (r > 255 || r < 140) {
    i *= -1; //reverses i once r hits the bounding values
  }
  if (g > 255 || g < 140) {
    j *= -1; //reverses j once g hits the bounding values
  }
  if (b > 255 || b < 140) {
    k *= -1; //reverses k once b hits the bounding values
  }

  //Iterates the values of RGB
  r += i;
  g += j;
  b += k;
}

function draw() {
  stroke(r, g, b);
  renderRow(); //draws one row at a time (much faster)
  if (x > width - 1) {
    x = 0;
    y = y + spacing;

    interateRGB(); //Colors change only after a row of lines is complete
  }

  //stops drawing after the canvas is filled
  if (y > height) {
    noLoop();
  }
}
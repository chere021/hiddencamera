//10print
let x = 0;
let y = 0;
let spacing = 10;

var r;
var g;
var b;
var difference;

// Iterators that change the value of RGB
var i = 10;
var j = 10;
var k = 10;


function setup() {
  createCanvas(400, 400);
  background(0);
  r = random(255);
  g = random(255);
  b = random(255);
  colorvariable = 0;
  if (colorvariable < 1) {
    g = random(r - 1)
    b = random(r - 1);
    difference = abs(g - b)
} else if (colorvariable < 2) {
    r = random(g - 1)
    b = random(g - 1);
    difference = abs(r - b)
} else {
    r = random(b - 1)
    g = random(b - 1);
    difference = abs(r - g)
}
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
  if (colorvariable < 1){
    if (r > 255 || r < 140) {
      i *= -1; //reverses i once r hits the bounding values

    }
    if (g > r - 20 || g < 0) {
      j *= -1; //reverses j once g hits the bounding values
    }
    if (b > r - 20 || b < 0) {
      k *= -1; //reverses k once b hits the bounding values
    }
  }
  // if (r > 255 || r < 0) {
  //   i *= -1; //reverses i once r hits the bounding values
  // }
  // if (g > 255 || g < 0) {
  //   j *= -1; //reverses j once g hits the bounding values
  // }
  // if (b > 255 || b < 0) {
  //   k *= -1; //reverses k once b hits the bounding values
  // }

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
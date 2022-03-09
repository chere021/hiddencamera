//10print
let x = 0;
let y = 0;
let spacing = 10;

var colorvariable;
var strokevariable;
var flip;
var r;
var b;
var g;

function setup() {
  createCanvas(675, 675);
  background(0)
  colorvariable = random(2);
  flip = random(1)
  if (colorvariable < 1) {
    r = 255
    if (flip < 0.5) {
      g = 0
      b = random(1, 254)
    } else {
      g = random(1, 254)
      b = 0
    }
  } else if (colorvariable < 2) {
    g = 255
    if (flip < 0.5) {
      r = 0
      b = random(1, 254)
    } else {
      r = random(1, 254)
      b = 0
    }
  } else {
    b = 255
    if (flip < 0.5) {
      r = 0
      g = random(1, 254)
    } else {
      r = random(1, 254)
      g = 0
    }
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
  //Bound r, g, and b between pastel values 140-255
  if (254 > r > 0) {
    if (r > 253 || r < 2) {
      i *= -1; //reverses j once g hits the bounding values
    }
  }
  if (254 > b > 0) {
    if (b > 253 || b < 2) {
      j *= -1; //reverses j once g hits the bounding values
    }
  }
  if (254 > g > 0) {
    if (g > 253 || g < 2) {
      k *= -1; //reverses j once g hits the bounding values
    }
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
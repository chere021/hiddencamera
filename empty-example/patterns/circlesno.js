var circlesno = [];

function setup() {
  createCanvas(675, 675);
  background(0);

  var protection = 0;

  while (circlesno.length < 500) {
    // Pick a random circle
    var circle = {
      x: random(width),
      y: random(height),
      r: random(6, 50)
    };

    // Does it overlap any previous circles?
    var overlapping = false;
    for (var j = 0; j < circlesno.length; j++) {
      var other = circlesno[j];
      var d = dist(circle.x, circle.y, other.x, other.y);
      if (d < circle.r + other.r) {
        overlapping = true;
      }
    }

    // If not keep it!
    if (!overlapping) {
      circlesno.push(circle);
    }

    // Are we stuck?
    protection++;
    if (protection > 10000) {
      break;
    }
  }


  for (var i = 0; i < circlesno.length; i++) {
    fill(255, 0, 175, 100);
    noStroke();
    ellipse(circlesno[i].x, circlesno[i].y, circlesno[i].r * 2, circlesno[i].r * 2);
  }
}
// adapted from original code of Daniel Shiffman
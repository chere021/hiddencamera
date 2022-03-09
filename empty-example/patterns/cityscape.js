function setup() {
    createCanvas(675, 675);
    background(0);

}

function draw() {
    for (var j = 0; j < 10; j++) {
        var x = random(500);
        var y = random(100,675);
        var h = random(50,400);
        var w = h * random(0.3, 0.7)
        fill(random(25,200), 300)
        rect(x, y, w, h)
        noLoop()
    }
    for (var i = 0; i < 200; i++) {
        var x = random(width);
        var y = random(height);
        var r = random(5, 50);
        fill(255, 50, 0, 100);
        noStroke();
        ellipse( x, y, r*2, r*2);
        noLoop()
    }
}
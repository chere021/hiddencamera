function setup() {
    createCanvas(675,675);
    background(0);
}

function draw() {
    for (let i = 0; i < 100; i++) {
        let r = random(50);
        stroke(r * 5);
        line(50, i, 50 + r, i);
    }
}
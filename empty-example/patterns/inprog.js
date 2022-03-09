function setup() {
    createCanvas(675,675);   
}

function draw() {
    background(0);
    for(let i = 0; i < width; i+=45) {
        for(let j = 0; j < height; j+=45) {
            noFill()
            stroke(255)
            strokeWeight(3)
            rect(i, j, 45, 45)
        }
    }
}

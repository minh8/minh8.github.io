const WIDTH = 1200;
const HEIGHT = 800;
const w = 100;
const h = 50;  
let x = 0;
let y = 0;
let speed = 8;
let xDir = 1;
let yDir = 1;

function setup() {
  // Create the canvas
  createCanvas(WIDTH,HEIGHT);
  background(200);
  frameRate(30);
  
//  // Set colors
//  fill(204, 101, 192, 127);
//  stroke(127, 63, 120);

//  // A rectangle
//  rect(40, 120, 120, 40);
//  // An ellipse
//  ellipse(240, 240, 80, 80);
//  // A triangle
//  triangle(300, 100, 320, 100, 310, 80);

//  rect(30, 20, 85, 55, 50, 15, 10, 5);
//}
}

function draw() {
  // put drawing code here
  background(200);
//   fill(204,101,192,127);
  rect(x, y, w, h);
  y += speed * yDir;
  x += speed * xDir;
  if (y + h > HEIGHT || y < 0) {
    yDir = -yDir;
  }
  if (x + w > WIDTH || x < 0) {
    xDir = -xDir;
  }
}

//function mousePressed() {
//  if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
//    let fs = fullscreen();
//    fullscreen(!fs);
// }
//}

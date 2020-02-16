let gravity;
let fireworks = [];
let test = 10;
let maxFireworks = 5;
let currentFireworks = 0;

function setup() {
  width = windowWidth - 20;
  height = windowHeight - 20;
  createCanvas(width, height);
  colorMode(HSB);
  gravity = createVector(0, 0.3);
  stroke(255);
  strokeWeight(4);
  background(0);
}

function draw() {
  colorMode(RGB);
  background(0, 25);
  if (random(1) < 0.02 && test > 0 && currentFireworks < maxFireworks) {
    // test--;
    currentFireworks++;
    fireworks.push(new Firework(width, height, gravity));
  }
  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done()) {
      currentFireworks--;
      fireworks.splice(i, 1);
    }
  }
}

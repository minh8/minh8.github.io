class Particle {
  constructor(i, t, e, o, s, r, h) {
    if (
      ((this.position = createVector(i, t)),
      (this.firework = e),
      (this.hue = o),
      (this.lifeSpan = 255),
      (this.multiColor = s),
      (this.circleShape = r),
      (this.circleShapeRadius = h),
      this.firework)
    ) {
      const i = -t / 45;
      this.velocity = createVector(0, random(0.8 * i, i));
    } else
      (this.velocity = p5.Vector.random2D()),
        this.circleShape
          ? this.velocity.mult(this.circleShapeRadius)
          : this.velocity.mult(random(5, 35));
    (this.acceleration = createVector(0, 0)),
      (this.moveLeft = random(1) < 0.5 ? -1 : 1),
      (this.direction = ((10 * random()) / 100) * this.moveLeft),
      this.firework || (this.direction = 0);
  }
  applyForce(i) {
    this.acceleration.add(i), (this.acceleration.x += this.direction);
  }
  update() {
    this.firework ||
      (this.velocity.mult(random(0.85, 0.92)),
      (this.lifeSpan -= random(2, 12))),
      this.velocity.add(this.acceleration),
      this.position.add(this.velocity),
      this.acceleration.mult(0);
  }
  show() {
    if ((colorMode(HSB), this.firework))
      strokeWeight(4),
        stroke(this.hue, 255, 255),
        ellipse(this.position.x, this.position.y, 1);
    else {
      strokeWeight(random(2, 3));
      const i = random(1) < 0.1 ? random(0.008, 0.01) : random(0.1, 0.3),
        t = this.hue + (this.multiColor ? random(-150, 150) : 0);
      stroke(t, 255, 255, this.lifeSpan),
        ellipse(this.position.x, this.position.y, i);
    }
  }
  done() {
    return this.lifeSpan < 0;
  }
}

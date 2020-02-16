class Particle2 {
  constructor(t, i, o, e, s, a) {
    (this.position = createVector(t, i)),
      (this.hue = o),
      (this.lifeSpan = 255),
      (this.multiColor = e),
      (this.circleShape = s),
      (this.circleShapeRadius = a),
      (this.velocity = p5.Vector.random2D()),
      this.velocity.mult(random(1, 5)),
      (this.acceleration = createVector(0, 0));
  }
  applyForce(t) {
    this.acceleration.add(t);
  }
  update() {
    this.velocity.mult(random(0.85, 0.92)),
      (this.lifeSpan -= random(3, 10)),
      this.velocity.add(this.acceleration),
      this.position.add(this.velocity),
      this.acceleration.mult(0);
  }
  show() {
    colorMode(HSB), strokeWeight(random(2, 3));
    const t = random(1) < 0.1 ? random(0.008, 0.01) : random(0.02, 0.03),
      i = this.hue + (this.multiColor ? random(-150, 150) : 0);
    stroke(i, 255, 255, this.lifeSpan),
      ellipse(this.position.x, this.position.y, t);
  }
  done() {
    return this.lifeSpan < 0;
  }
}

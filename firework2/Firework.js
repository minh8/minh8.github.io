class Firework {
  constructor(i, t, e) {
    (this.width = i),
      (this.height = t),
      (this.gravity = e),
      (this.hue = random(255)),
      (this.firework = new Particle(
        random(this.width),
        this.height,
        !0,
        this.hue,
        !1,
        !1,
        0
      )),
      (this.exploded = !1),
      (this.particles = []),
      (this.multiColor = random(1) < 0.2),
      (this.circleShape = random(1) < 0.25),
      (this.circleShapeRadius = random(15, 35));
  }
  update() {
    this.exploded ||
      (this.firework.applyForce(this.gravity),
      this.firework.update(),
      this.firework.velocity.y >= 0 && ((this.exploded = !0), this.explode()));
    for (let i = this.particles.length - 1; i >= 0; i--)
      this.particles[i].applyForce(this.gravity), this.particles[i].update();
  }
  show() {
    this.exploded || this.firework.show();
    for (let i = this.particles.length - 1; i >= 0; i--)
      this.particles[i].show(),
        this.particles[i].done() && this.particles.splice(i, 1);
  }
  explode() {
    for (let i = 0; i < random(200, 1500); i++) {
      const i = new Particle(
        this.firework.position.x,
        this.firework.position.y,
        !1,
        this.hue,
        this.multiColor,
        this.circleShape,
        this.circleShapeRadius
      );
      this.particles.push(i);
    }
  }
  done() {
    return this.exploded && 0 === this.particles.length;
  }
}

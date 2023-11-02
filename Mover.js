class Mover {
  constructor(r, s) {
    this.position = createVector(mouseX, mouseY);
    this.target = createVector(random(width), random(height));
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.acceleration = createVector(0, 0);
    this.rate = r;
    this.speed = s;
    this.connections = [];
    this.gravity = createVector(0, 0);

  }

  applyForce(aForce) {
    this.acceleration.add(aForce);
  }

  update() {
    let gravityForce = createVector(width / 2, height / 2).sub(this.position);
    gravityForce.setMag(0.1);
    this.applyForce(gravityForce);

    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);

    if (random(1) < this.rate) {
      this.target = createVector(random(width), random(height));
    }

  };

  addConnection(otherMover) {
    this.connections.push(otherMover);
  }

  drawConnection(otherMover) {
    let d = dist(this.position.x, this.position.y, otherMover.position.x, otherMover.position.y);
    if (d < r) {
      let sw = map(d, 0, r, ss, 1);
      let sf = map(sw, 20, 1, 255, 50);
      strokeWeight(sw);
      stroke(255, sf);
      line(this.position.x, this.position.y, otherMover.position.x, otherMover.position.y);
    }
}

  draw() {
    strokeWeight(bs);
    stroke(255, 180, 50, 255);
    point(this.position.x, this.position.y);
  }
  
}
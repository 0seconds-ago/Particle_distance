class Mover {
  constructor(r, s) {
    this.pos = createVector(mouseX, mouseY);
    this.target = createVector(random(width), random(height));
    this.vel = createVector(0,0);
    this.acc = createVector(0, 0);
    this.rate = r;
    this.speed = s;
    this.connections = [];
    this.gravity = createVector(0, 0);

  }

  applyForce(aForce) {
    if (mouseIsPressed) {
      this.acc.add(aForce);
    }
    else {
      this.acc.mult(0);
    }
    
  }

  update() {
    let gravity = createVector(width/2, height/2).sub(this.pos);
    gravity.setMag(1);
    this.applyForce(gravity);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    

    if (random(1) < this.rate) {
      this.target = createVector(random(width), random(height));
    }

    this.pos.x = lerp(this.pos.x, this.target.x, this.speed);
    this.pos.y = lerp(this.pos.y, this.target.y, this.speed);
    
    this.acc.mult(0);
  };

  addConnection(other) {
    this.connections.push(other);
  }

  drawConnection(other) {
    let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
    if (d < r) {
      let sw = map(d, 0, r, ss, 1);
      let sf = map(sw, 20, 1, 255, 50);
      strokeWeight(sw);
      stroke(255, sf);
      line(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
    }
}

  draw() {
    strokeWeight(bs);
    stroke(255, 180, 50, 255);
    point(this.pos.x, this.pos.y);
  }
  
}
class Mover {
  constructor(r, s) {
    this.pos = createVector(mouseX, mouseY);
    this.target = createVector(random(width), random(height));
    this.vel = createVector(0, random(-7, 5));
    this.acc = createVector(0,random(-5, 5));
    this.rate = r;
    this.speed = s;
    this.connections = [];
    //this.gravity = createVector(0, 0);

  }

  applyForce(aForce) {
    if (mouseIsPressed) {
      this.acc.add(aForce);
    }
    else{this.acc.sub(aForce).mult(0.3);
    }
}

  update() {
    let gravity = createVector(0,0.1).sub(this.x,this.y);
    this.applyForce(gravity);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    

    if (random(1) < this.rate) {
      this.target = createVector(random(width), random(height));
    }

    // this.pos.x = lerp(this.pos.x, this.target.x, this.speed);
    // this.pos.y = lerp(this.pos.y, this.target.y, this.speed);
    
    this.acc.mult(0);

  };

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
  
  
  drawSil(other) {
    let d = dist(this.pos.x, this.pos.y, this.pos.x, 0);
    if (d < silr) {
      let sw = map(d, 0, silr, sils, 1);
      let sf = map(sw, 20, 1, 255, 50);
      strokeWeight(sw+this.vel.y);
      stroke(255, sf);
      // quad(this.pos.x, this.pos.y, this.pos.x,0, 
      //   this.pos.x, this.pos.y, this.x, 0, +10, 2, 7);
      line(this.pos.x, this.pos.y, this.pos.x,0);
    }
  }


  draw() {
    bs = this.vel.y;
    strokeWeight((bs+30)*5);
    stroke(255, 180, 50, 255);
    point(this.pos.x, this.pos.y);
  }

  checkEdges() {
    // if (this.pos.x > width || this.pos.x < 0) {
    //   this.vel.x *= -1;
    // }

    if (this.pos.y > height || this.pos.y < 0) {
      if (this.pos.y > height) {
        this.pos.y = height;
      }
      this.vel.y *= -0.8;

    }
  }
  
}
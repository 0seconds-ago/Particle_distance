class Mover {
  constructor(r, s) {
    this.x = mouseX;
    this.y = mouseY;
    this.xl = random(width);
    this.yl = random(height);
    this.rate = r;
    this.speed = s;
    this.connections = [];


  }
  update() {
    if (random(1) < this.rate) {
      this.xl = random(width);
      this.yl = random(height);
    }

    //? lerp(어디서, 어디로, 얼마나 빠르게);
    this.x = lerp(this.x, this.xl, this.speed);
    this.y = lerp(this.y, this.yl, this.speed);

  };

  addConnection(otherMover) {
    this.connections.push(otherMover);
  }

  drawConnection(otherMover) {
    let d = dist(this.x, this.y, otherMover.x, otherMover.y);
    if (d < r) {
      let sw = map(d, 0, r, 15, 1);
      let sf = map(sw, 20, 1, 255, 50);
      strokeWeight(sw);
      stroke(255, sf);
      line(this.x, this.y, otherMover.x, otherMover.y);
    }
}

  draw() {
    strokeWeight(20);
    stroke(255, 180, 50, 255);
    point(this.x, this.y);

}
}
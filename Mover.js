class Mover {
  constructor(r, s) {
    this.x = random(width);
    this.y = random(height);
    this.xl = width / 2;
    this.yl = height / 2;
    this.rate = r;
    this.speed = s;


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
}

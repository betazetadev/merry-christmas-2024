class Snowflake {
  constructor() {
    this.posX = random(width);
    this.posY = random(-height, 0);
    this.size = random(2, 6);
    this.speed = map(this.size, 2, 6, 1, 3);
    this.angle = random(TWO_PI);
    this.swing = random(20, 40);
  }

  update() {
    this.posX += sin(this.angle) * 0.5;
    this.angle += 0.02;
    this.posY += this.speed;
    if (this.posY > height) {
      this.posY = random(-50, 0);
      this.posX = random(width);
      this.angle = random(TWO_PI);
    }
  }

  display() {
    fill(255);
    noStroke();
    ellipse(this.posX, this.posY, this.size);
  }
}
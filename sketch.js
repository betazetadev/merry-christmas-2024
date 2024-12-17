let stars = [];
let santaX = 0;
let moonX, moonY, moonSize;
let reindeerParams = [];
let numReindeers = 9;
let moonGlowIntensity = 0;
let moonGlowDirection = 1;
let santaOutlineColor;
let reindeerOutlines = [];

// Fireworks variables
let fireworks = [];
let gravity;

let snowflakes = [];

// Audio elements
let music;
let hohoho;

function setup() {
  createCanvas(windowWidth, windowHeight);

  gravity = createVector(0, 0.2);

  // Grab the main music element from the DOM
  music = document.getElementById('background-music');
  // Create the hohoho Audio object
  hohoho = new Audio('assets/hohoho.mp3');

  if (music.paused) {
    console.log("Music is paused. Tap to start the music.");
  } else {
    console.log("Music is already playing.");
  }

  // Generate stars
  for (let i = 0; i < 200; i++) {
    stars.push({
      x: random(width),
      y: random(height),
      size: random(1, 3),
      twinkleOffset: random(TWO_PI),
    });
  }

  // Initialize moon parameters
  moonX = width - 200;
  moonY = 150;
  moonSize = 200;

  // Precompute Santa's outline color
  let christmasColors = [color(255, 0, 0), color(0, 255, 0), color(255, 223, 0), color(255, 255, 255)];
  santaOutlineColor = random(christmasColors);

  // Initialize Reindeer parameters and precompute outline colors
  for (let i = 0; i < numReindeers; i++) {
    reindeerParams.push({
      amplitude: random(20, 50),
      speed: random(0.02, 0.04),
      phase: random(TWO_PI),
      verticalOffset: random(-30, 30),
      color: color(random(100, 255), random(100, 255), random(255)),
    });
    reindeerOutlines.push(random(christmasColors));
  }

  // Generate snowflakes
  for (let i = 0; i < 150; i++) {
    snowflakes.push(new Snowflake());
  }
}

function mousePressed() {
  const tapMessage = document.getElementById('tap-message');
  const hohohoMessage = document.getElementById('hohoho-message');

  if (music.paused) {
    music.play();
    hideTapMessage(tapMessage, hohohoMessage);
  } else {
    if (hohohoMessage.style.display === 'flex') {
      hohohoMessage.classList.add('fade-out');
      setTimeout(() => {
        hohohoMessage.style.display = 'none';
      }, 1000); // Match the duration of the fade-out animation
    }
    hohoho.currentTime = 0;
    hohoho.play();
  }
}

function hideTapMessage(tapMessage, hohohoMessage) {
  if (tapMessage) {
    tapMessage.classList.add('fade-out');
    setTimeout(() => {
      tapMessage.style.display = 'none';
      hohohoMessage.style.display = 'flex';
    }, 1000); // Match the duration of the fade-out animation
  }
}

function draw() {
  background(10, 10, 50); // Dark sky

  moonGlowIntensity += 0.5 * moonGlowDirection;
  if (moonGlowIntensity > 80 || moonGlowIntensity < 0) {
    moonGlowDirection *= -1;
  }


  drawMoon();
  drawStars();
  animateStars();

  // Snowflakes
  let currentTime = frameCount / 60;
  for (let flake of snowflakes) {
    flake.update(currentTime);
    flake.display();
  }

  // Fireworks
  if (random(1) < 0.05) {
    let fireworkX = random(width);
    fireworks.push(new Firework(fireworkX));
  }

  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }

  // Santa and reindeers
  santaX += 2;
  let lastReindeerX = santaX - numReindeers * 80 - 100;
  if (lastReindeerX > width) santaX = -300;

  let santaY = height / 2 + sin(santaX * 0.01) * 50;

  drawGlow(santaX + 25, santaY + 10, 60, color(255, 255, 255, 50));
  drawSanta(santaX, santaY);

  let reindeerSpacing = 80;
  for (let i = 0; i < reindeerParams.length; i++) {
    let rp = reindeerParams[i];
    let rx = santaX - (i + 1) * 80 - 100;
    let ry = santaY + sin(frameCount * rp.speed + rp.phase) * rp.amplitude + rp.verticalOffset;
    drawReindeer(rx, ry, rp.color, reindeerOutlines[i]);
  }
}

function drawGlow(cx, cy, diameter, col) {
  noStroke();
  fill(col);
  ellipse(cx, cy, diameter, diameter);
}

function drawMoon() {
  push();
  noStroke();

  fill(240, 240, 255, 220);
  ellipse(moonX, moonY, moonSize);

  for (let i = 0; i < 6; i++) {
    fill(240, 240, 255, 20 + moonGlowIntensity - i * 3);
    ellipse(moonX, moonY, moonSize + i * 30);
  }

  fill(200, 200, 230, 100);
  ellipse(moonX - 30, moonY - 20, 40, 30);
  ellipse(moonX + 20, moonY + 10, 30, 20);

  pop();
}

function drawSanta(x, y) {
  stroke(255);
  strokeWeight(3);
  fill(200, 50, 50);
  rect(x, y + 20, 50, 20);

  fill(200, 50, 50);
  rect(x + 10, y, 20, 20);

  fill(255, 200, 180);
  rect(x + 15, y - 10, 10, 10);

  fill(200, 50, 50);
  triangle(x + 15, y - 10, x + 20, y - 20, x + 25, y - 10);

  fill(255);
  ellipse(x + 20, y - 20, 5);
  noStroke();
}

function drawReindeer(x, y, color) {
  stroke(255);
  strokeWeight(3);
  fill(139, 69, 19);
  rect(x, y, 40, 20);
  rect(x + 30, y - 10, 10, 10);

  line(x + 5, y + 20, x + 5, y + 30);
  line(x + 15, y + 20, x + 15, y + 30);
  line(x + 25, y + 20, x + 25, y + 30);
  line(x + 35, y + 20, x + 35, y + 30);

  stroke(0);
  line(x + 35, y - 10, x + 30, y - 20);
  line(x + 35, y - 10, x + 40, y - 20);

  noStroke();
  fill(color);
  ellipse(x + 20, y + 10, 5);
}

function drawStars() {
  noStroke();
  for (let star of stars) {
    let twinkle = sin(frameCount * 0.1 + star.twinkleOffset) * 0.5 + 0.5;
    fill(255, 255, 255, 200 * twinkle);
    ellipse(star.x, star.y, star.size);
  }
}

function animateStars() {
  if (frameCount % 60 === 0) {
    for (let star of stars) {
      star.size = random(1, 3);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
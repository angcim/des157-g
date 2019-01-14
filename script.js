console.log('reading js');

function setup() {
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent('mySketch');
  background(255);
  smooth();
}

function draw() {
  noStroke();
  fill(140, 200, random(250));
  ellipse(mouseX, mouseY, 160, 160);
  fill(140, 255, random(200));
  ellipse(mouseX, mouseY, 140, 140);
  fill(140, 200, random(250));
  ellipse(mouseX, mouseY, 120, 120);
  fill(140, 255, random(200));
  ellipse(mouseX, mouseY, 100, 100);
  fill(140, 200, random(250));
  ellipse(mouseX, mouseY, 80, 80);
  fill(140, 255, random(200));
  ellipse(mouseX, mouseY, 60, 60);
  fill(140, 200, random(250));
  ellipse(mouseX, mouseY, 40, 40);
  fill(140, 255, random(200));
  ellipse(mouseX, mouseY, 20, 20);

  if (mouseIsPressed) {
    fill(90, 230, mouseY);
    ellipse(mouseX, mouseY, 250, 250);

    rectMode(CENTER);
    for (var y = 49; y < 250; y += 100) {
      for (var x = 49; x < 800; x += 100) {
        for (var d = 100; d > 0; d -= 100) {
          stroke(255);
          noFill();
          strokeWeight(3);
          ellipse(x + 25, y - 5, d - 55, d - 55);
          ellipse(x - 25, y - 25, d - 86, d - 86);
          ellipse(x + 40, y + 45, d - 86, d - 86);
          ellipse(x - 22, y + 32, d - 77, d - 77);
        }
      }
    }

    rectMode(CENTER);
    for (var y = 49; y < 250; y += 100) {
      for (var x = 49; x < 800; x += 100) {
        for (var d = 100; d > 0; d -= 100) {
          stroke(255);
          noFill();
          strokeWeight(1.5);
          ellipse(x + 25, y - 5, d - 67, d - 67);
          ellipse(x - 25, y - 25, d - 95, d - 95);
          ellipse(x + 40, y + 45, d - 95, d - 95);
          ellipse(x - 22, y + 32, d - 87, d - 87);
          ellipse(x + 25, y - 5, d - 77, d - 77);
          ellipse(x - 22, y + 32, d - 95, d - 95);
        }
      }
    }

    rectMode(CENTER);
    for (var y = 49; y < 250; y += 100) {
      for (var x = 49; x < 800; x += 100) {
        for (var d = 100; d > 0; d -= 100) {
          stroke(255);
          noFill();
          strokeWeight(1);
          ellipse(x + 25, y - 5, d - 87, d - 87);
        }
      }
    }

    rectMode(CENTER);
    for (var y = 49; y < 250; y += 100) {
      for (var x = 49; x < 800; x += 100) {
        for (var d = 100; d > 0; d -= 100) {
          stroke(255);
          noFill();
          strokeWeight(0.5);
          ellipse(x + 25, y - 5, d - 95, d - 95);
        }
      }
    }
  }
}

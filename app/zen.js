this.program = new program();

function setup() {
  this.program.init();
  this.program.setup();
}

function draw() {
  this.program.draw();
}

function mousePressed(event) {
  this.program.mouseClick(event);
  return false;
}



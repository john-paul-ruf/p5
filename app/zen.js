function setup() {
  this.program = new program();
  this.program.setup();

  function mouseClicked(event) {
    alert('boom');
  }
};

function draw() {
  this.program.draw();
};

function mouseClicked(event) {
  this.program.mouseClick(event);
};

function touchStarted() {
  this.program.mouseClick(event);
};
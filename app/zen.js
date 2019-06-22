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

function mousePressed(event) {
  this.program.mouseClick(event);
};
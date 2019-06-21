function setup() {
  this.program = new program();
  this.program.setup();

  function mouseClicked(event) {
    alert('boom');
  }
};

function mouseClicked(event) {
  this.program.mouseClick(event);
};

function draw() {
  this.program.draw();
};

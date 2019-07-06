this.loader = new Loader();
this.arenaRPG = new ArenaRPG();

function setup() {
  this.loader.init();
  this.loader.setup();

  this.arenaRPG.init();
  this.arenaRPG.setup();

}

function draw() {
  this.loader.draw();
  this.arenaRPG.draw();
}

function mousePressed(event) {
  this.loader.mouseClick(event);
  this.arenaRPG.mouseClick(event);
  return false;
}



this.loader = new Loader();
this.arenaRPG = new ArenaRPG();
this.asteroids = new Asteroids();

function setup() {
  this.loader.init();
  this.loader.setup();

  this.arenaRPG.init();
  this.arenaRPG.setup();

  this.asteroids.init();
  this.asteroids.setup();
}

function draw() {
  this.loader.draw();
  this.arenaRPG.draw();
  this.asteroids.draw();
}

function mousePressed(event) {
  this.loader.mouseClick(event);
  this.arenaRPG.mouseClick(event);
  this.asteroids.mouseClick(event);
  return false;
}



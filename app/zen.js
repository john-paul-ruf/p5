this.loader = new Loader();
this.arenaRPG = new ArenaRPG();
this.asteroids = new Asteroids();
window.easyCamera;

let engineFont;
function preload() {
  engineFont = loadFont('app/engine/assets/Pixel-Miners.otf');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  window.cam.setViewport([0, 0, windowWidth, windowHeight]);
}
function setup() {
  pixelDensity(1);
  setAttributes('antialias', true);

  this.loader.init();
  this.loader.setup();

  this.arenaRPG.init();
  this.arenaRPG.setup();

  this.asteroids.init();
  this.asteroids.setup();
}

function draw() {
 
  textFont(engineFont);
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



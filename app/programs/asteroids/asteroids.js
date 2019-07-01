class Asteroids {
  constructor() {

  }

  setup() {
    this.canvas = createCanvas(window.innerWidth, window.innerHeight);
  }

  draw() {
    if (Loader.runningProgram === 'asteroids') {
      background(0);
      this.mainMenu.draw();
    }
  }

  mouseClick() {
    if (Loader.runningProgram === 'asteroids') {
      this.mainMenu.onClick();
    }
  }

  init() {

    Config.menuText = color(256, 256, 0);
    Config.menuBorders = color(256, 256, 0);
    Config.menuBackground = color(0, 0, 0);

    Config.buttonText = color(256, 256, 0);
    Config.buttonBorders = color(256, 256, 0);
    Config.buttonBackground = color(0, 0, 0);

    this.mainMenu = new AsteroidsMenu(this);
    this.mainMenu.init();

    var center = function (obj) {
      const x = (innerWidth - obj.width) / 2;
      const y = (innerHeight - obj.height) / 2;
      obj.x = x;
    };

    center(this.mainMenu);

  }
}

Asteroids.score = 0;
class Loader {
  constructor() {

  }

  setup() {
    this.canvas = createCanvas(window.innerWidth, window.innerHeight);
  }

  draw() {
    if (Loader.runningProgram === 'loader') {
      background(128);
      this.mainMenu.draw();
    }
  }

  mouseClick() {
    if (Loader.runningProgram === 'loader') {
      this.mainMenu.onClick();
    }
  }

  init() {

    Config.menuText = color(0, 0, 0);
    Config.menuBorders = color(256, 256, 256);
    Config.menuBackground = color(128, 128, 128);

    Config.buttonBorders = color(256, 256, 256);
    Config.buttonBackground = color(128, 128, 128);
    Config.buttonText = color(0, 0, 0);

    this.mainMenu = new LoaderMenu(this);
    this.mainMenu.init();

    var center = function (obj) {
      const x = (innerWidth - obj.width) / 2;
      const y = (innerHeight - obj.height) / 2;
      obj.x = x;
    };

    center(this.mainMenu);

  }
}

Loader.runningProgram = 'loader';

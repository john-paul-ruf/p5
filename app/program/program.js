class program {
  constructor() {

  }

  setup() {
    this.canvas = createCanvas(500, 500);
  }

  draw() {
    background(225);

    this.mainMenu.draw();
    this.characterBuilder.draw();
    this.aboutMenu.draw();
    this.fightMenu.draw();
  }

  mouseClick() {
    this.mainMenu.onClick();
    this.characterBuilder.onClick();
    this.aboutMenu.onClick();
    this.fightMenu.onClick();
  }

  init() {
    this.player = new player();
    this.player.init();

    this.mainMenu = new mainMenu(this);
    this.mainMenu.init();

    this.characterBuilder = new characterBuilderMenu(this);
    this.characterBuilder.init();

    this.aboutMenu = new aboutMenu(this);
    this.aboutMenu.init();

    this.fightMenu = new fightMenu(this);
    this.fightMenu.init();

  }
}
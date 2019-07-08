class ArenaRPG {
  constructor() {
    this.running = false;
  }

  setup() {
    this.canvas = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  }

  draw() {
    if (Loader.runningProgram === 'arena') {
      background(96);
      this.mainMenu.draw();
      this.characterBuilder.draw();
      this.fightMenu.draw();
    }
  }

  mouseClick() {
    if (Loader.runningProgram === 'arena') {
      this.mainMenu.onClick();
      this.characterBuilder.onClick();
      this.fightMenu.onClick();
    }
  }

  init() {

    Config.menuText = color(0, 0, 0);
    Config.menuBorders = color(0, 256, 0);
    Config.menuBackground = color(128, 128, 128);

    Config.buttonBorders = color(0, 256, 0);
    Config.buttonBackground = color(128, 128, 128);
    Config.buttonText = color(0, 0, 0);

    Config.attackButtonBorder = color(256, 0, 0);
    Config.attackButtonBackground = color(128, 128, 128);

    Config.attributePlusButtonBorder = color(256, 0, 0);
    Config.attributePlusButtonBackground = color(128, 128, 128);

    Config.attributeMinusButtonBorder = color(0, 0, 256);
    Config.attributeMinusButtonBackground = color(128, 128, 128);

   

    this.mainMenu = new MainMenu(this);
    this.mainMenu.init();

    this.characterBuilder = new CharacterBuilderMenu(this);
    this.characterBuilder.init();

    this.fightMenu = new FightMenu(this);
    this.fightMenu.init();

  }
}

ArenaRPG.initalPoints = 10;

ArenaRPG.player = new Player();
ArenaRPG.player.init();

class LoaderMenu extends Container {
  constructor(owner) {
    super(owner);
  }

  init() {

    this.color = Config.menuBackground;
    this.x = 50;
    this.y = 50;
    this.width = 400;
    this.height = 400;
    this.borderWidth = 3;
    this.borderColor = Config.menuBorders;
    this.rounding = 10;
    this.dropShadow = true;

    this.lblHeader = new Label(this);
    this.lblHeader.textColor = Config.menuText;
    this.lblHeader.y = 20;
    this.lblHeader.x = 0;
    this.lblHeader.width = 400;
    this.lblHeader.height = 50;
    this.lblHeader.text = "p5.js - Multi Game Template";
    this.lblHeader.textSize = 26;
    this.lblHeader.alignment = 'center';

    this.btnArenaRPG = new Button(this);
    this.btnArenaRPG.textColor = Config.buttonText;
    this.btnArenaRPG.color = Config.buttonBackground;
    this.btnArenaRPG.y = 70;
    this.btnArenaRPG.x = 100;
    this.btnArenaRPG.width = 200;
    this.btnArenaRPG.height = 50;
    this.btnArenaRPG.text = "Arena RPG";
    this.btnArenaRPG.rounding = 10;
    this.btnArenaRPG.borderColor = Config.buttonBorders;
    this.btnArenaRPG.borderWidth = 1;
    this.btnArenaRPG.dropShadow = true;

    this.btnAsteroids = new Button(this);
    this.btnAsteroids.textColor = Config.buttonText;
    this.btnAsteroids.color = Config.buttonBackground;
    this.btnAsteroids.y = 140;
    this.btnAsteroids.x = 100;
    this.btnAsteroids.width = 200;
    this.btnAsteroids.height = 50;
    this.btnAsteroids.text = "Asteroids";
    this.btnAsteroids.rounding = 10;
    this.btnAsteroids.borderColor = Config.buttonBorders;
    this.btnAsteroids.borderWidth = 1;
    this.btnAsteroids.dropShadow = true;

    this.drawables.push(this.lblHeader);
    this.drawables.push(this.btnArenaRPG);
    this.drawables.push(this.btnAsteroids);

    this.clickables.push(this.btnArenaRPG);
    this.clickables.push(this.btnAsteroids);

    this.arenaTransition = function () {
      Loader.runningProgram = 'arena';
    };

    this.btnArenaRPG.subscribe(this.arenaTransition);

    this.asteroidsTransition = function () {
      Loader.runningProgram = 'asteroids';
    };

    this.btnAsteroids.subscribe(this.asteroidsTransition);

  }
}
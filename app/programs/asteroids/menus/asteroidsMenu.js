class AsteroidsMenu extends Container {
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
    this.lblHeader.text = "p5.js - Asteroids Template";
    this.lblHeader.textSize = 26;
    this.lblHeader.alignment = 'center';

    this.btnStart = new Button(this);
    this.btnStart.textColor = Config.buttonText;
    this.btnStart.color = Config.buttonBackground;
    this.btnStart.y = 70;
    this.btnStart.x = 100;
    this.btnStart.width = 200;
    this.btnStart.height = 50;
    this.btnStart.text = "Start";
    this.btnStart.rounding = 10;
    this.btnStart.borderColor = Config.buttonBorders;
    this.btnStart.borderWidth = 1;
    this.btnStart.dropShadow = true;

    this.btnGameSelector = new Button(this);
    this.btnGameSelector.textColor = Config.buttonText;
    this.btnGameSelector.color = Config.buttonBackground;
    this.btnGameSelector.y = 300;
    this.btnGameSelector.x = 100;
    this.btnGameSelector.width = 200;
    this.btnGameSelector.height = 50;
    this.btnGameSelector.text = "Game Selector";
    this.btnGameSelector.rounding = 10;
    this.btnGameSelector.borderColor = Config.buttonBorders;
    this.btnGameSelector.borderWidth = 1;
    this.btnGameSelector.dropShadow = true;

    this.drawables.push(this.lblHeader);
    this.drawables.push(this.btnStart);
    this.drawables.push(this.btnGameSelector);

    this.clickables.push(this.btnStart);
    this.clickables.push(this.btnGameSelector);

    this.gameSelectTransition = function () {
      Loader.runningProgram = 'loader';
    };

    this.btnGameSelector.subscribe(this.gameSelectTransition);


  }
}
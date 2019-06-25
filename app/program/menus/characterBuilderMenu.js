class characterBuilderMenu extends container {
  constructor(owner) {
    super(owner);
  }

  init() {

    this.color = color(256, 256, 256);
    this.x = 50;
    this.y = -400;
    this.width = 400;
    this.height = 400;
    this.borderWidth = 3;
    this.borderColor = color(0, 256, 0);
    this.rounding = 10;
    this.visible = true;
    this.dropShadow = true;

    this.lblHeader = new label(this);
    this.lblHeader.textColor = color(0, 0, 0);
    this.lblHeader.y = 10;
    this.lblHeader.x = 0;
    this.lblHeader.width = 400;
    this.lblHeader.height = 50;
    this.lblHeader.text = "Character Builder";
    this.lblHeader.alignment = 'center';
    this.lblHeader.textSize = 26;

    this.btnFight = new button(this);
    this.btnFight.textColor = color(0, 0, 0);
    this.btnFight.color = color(225, 225, 225);
    this.btnFight.y = 240;
    this.btnFight.x = 100;
    this.btnFight.width = 200;
    this.btnFight.height = 50;
    this.btnFight.text = "Fight";
    this.btnFight.rounding = 10;
    this.btnFight.borderColor = color(0, 256, 0);
    this.btnFight.borderWidth = 1;
    this.btnFight.dropShadow = true;


    this.fightTransition = function () {
      var that = this;
      var inAction = function () {
        if (that.container.y < 510) {
          that.container.owner.characterBuilder.y += 20;
          that.container.owner.mainMenu.y += 20;
          that.container.owner.fightMenu.y += 20;
          that.container.owner.aboutMenu.y += 20;
          setTimeout(inAction, 50);
        }
      };
      setTimeout(inAction, 50);
    };

    this.btnFight.subscribe(this.fightTransition);

    this.btnBack = new button(this);
    this.btnBack.textColor = color(0, 0, 0);
    this.btnBack.color = color(225, 225, 225);
    this.btnBack.y = 300;
    this.btnBack.x = 100;
    this.btnBack.width = 200;
    this.btnBack.height = 50;
    this.btnBack.text = "Back to Main";
    this.btnBack.rounding = 10;
    this.btnBack.borderColor = color(0, 256, 0);
    this.btnBack.borderWidth = 1;
    this.btnBack.dropShadow = true;

    this.characterAttributes = new characterAttributes(this, this.owner.player);
    this.characterAttributes.init();

    this.backTransition = function () {
      var that = this;
      var inAction = function () {
        if (that.container.y > -400) {
          that.container.owner.characterBuilder.y -= 20;
          that.container.owner.mainMenu.y -= 20;
          that.container.owner.fightMenu.y -= 20;
          that.container.owner.aboutMenu.y -= 20;
          setTimeout(inAction, 50);
        }
      };

      setTimeout(inAction, 50);
    };

    this.btnBack.subscribe(this.backTransition);

    this.drawables.push(this.btnBack);
    this.drawables.push(this.btnFight);
    this.drawables.push(this.lblHeader);
    this.drawables.push(this.characterAttributes);

    this.clickables.push(this.btnBack);
    this.clickables.push(this.btnFight);
    this.clickables.push(this.characterAttributes);

  }

}
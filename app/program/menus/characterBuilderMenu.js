class characterBuilderMenu extends container {
  constructor(owner) {
    super(owner);

    this.color = color(256, 256, 256);
    this.x = 50;
    this.y = -400;
    this.width = 400;
    this.height = 400;
    this.borderWidth = 3;
    this.borderColor = color(0, 256, 0);
    this.rounding = 10;
    this.visible = true;

    this.lblHeader = new label(this);
    this.lblHeader.textColor = color(0, 0, 0);
    this.lblHeader.y = 20;
    this.lblHeader.x = 0;
    this.lblHeader.width = 400;
    this.lblHeader.height = 50;
    this.lblHeader.text = "Character Builder";
    this.lblHeader.textSize = 21;

    this.lblStr = new label(this);
    this.lblStr.textColor = color(0, 0, 0);
    this.lblStr.y = 100;
    this.lblStr.x = 50;
    this.lblStr.width = 150;
    this.lblStr.height = 50;
    this.lblStr.text = "STR: 7";
    this.lblStr.textSize = 21;

    this.lblDex = new label(this);
    this.lblDex.textColor = color(0, 0, 0);
    this.lblDex.y = 150;
    this.lblDex.x = 50;
    this.lblDex.width = 150;
    this.lblDex.height = 50;
    this.lblDex.text = "DEX: 7";
    this.lblDex.textSize = 21;

    this.lblInt = new label(this);
    this.lblInt.textColor = color(0, 0, 0);
    this.lblInt.y = 200;
    this.lblInt.x = 50;
    this.lblInt.width = 150;
    this.lblInt.height = 50;
    this.lblInt.text = "INT: 7";
    this.lblInt.textSize = 21;

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

    this.drawables.push(this.btnBack);

    this.drawables.push(this.lblHeader);
    this.drawables.push(this.lblStr);
    this.drawables.push(this.lblDex);
    this.drawables.push(this.lblInt);

    this.clickables.push(this.btnBack);

    this.backTransition = function () {
      var that = this;
      var inAction = function () {
        if (that.container.y > -400) {
          that.container.owner.mainMenu.y -= 20;
          that.container.owner.characterBuilder.y -= 20;
          that.container.owner.aboutMenu.y -= 20;
          setTimeout(inAction, 50);
        }
      };

      setTimeout(inAction, 50);
    };

    this.btnBack.subscribe(this.backTransition);
  }
}
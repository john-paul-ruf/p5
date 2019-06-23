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

    this.lblPoints = new label(this);
    this.lblPoints.textColor = color(0, 0, 0);
    this.lblPoints.y = 50;
    this.lblPoints.x = 0;
    this.lblPoints.width = 400;
    this.lblPoints.height = 50;
    this.lblPoints.text = "Distribute 5 points";
    this.lblPoints.alignment = 'center';
    this.lblPoints.textSize = 21;

    this.lblStr = new label(this);
    this.lblStr.textColor = color(0, 0, 0);
    this.lblStr.y = 100;
    this.lblStr.x = 50;
    this.lblStr.width = 75;
    this.lblStr.height = 30;
    this.lblStr.text = "STR: 7";
    this.lblStr.textSize = 21;
    this.lblStr.alignment = 'right';

    this.btnStrPlus = new button(this);
    this.btnStrPlus.textColor = color(0, 0, 0);
    this.btnStrPlus.color = color(225, 225, 225);
    this.btnStrPlus.y = this.lblStr.y ;
    this.btnStrPlus.x = 135;
    this.btnStrPlus.width = 25;
    this.btnStrPlus.height = 25;
    this.btnStrPlus.text = "+";
    this.btnStrPlus.rounding = 0;
    this.btnStrPlus.borderColor = color(256, 0, 0);
    this.btnStrPlus.borderWidth = 1;


    this.btnStrMinus = new button(this);
    this.btnStrMinus.textColor = color(0, 0, 0);
    this.btnStrMinus.color = color(225, 225, 225);
    this.btnStrMinus.y = this.lblStr.y ;
    this.btnStrMinus.x = 165;
    this.btnStrMinus.width = 25;
    this.btnStrMinus.height = 25;
    this.btnStrMinus.text = "-";
    this.btnStrMinus.rounding = 0;
    this.btnStrMinus.borderColor = color(0, 0, 256);
    this.btnStrMinus.borderWidth = 1;


    this.lblDex = new label(this);
    this.lblDex.textColor = color(0, 0, 0);
    this.lblDex.y = 125;
    this.lblDex.x = 50;
    this.lblDex.width = 75;
    this.lblDex.height = 30;
    this.lblDex.text = "DEX: 7";
    this.lblDex.textSize = 21;
    this.lblDex.alignment = 'right';

    this.btnDexPlus = new button(this);
    this.btnDexPlus.textColor = color(0, 0, 0);
    this.btnDexPlus.color = color(225, 225, 225);
    this.btnDexPlus.y = this.lblDex.y;
    this.btnDexPlus.x = 135;
    this.btnDexPlus.width = 25;
    this.btnDexPlus.height = 25;
    this.btnDexPlus.text = "+";
    this.btnDexPlus.rounding = 0;
    this.btnDexPlus.borderColor = color(256, 0, 0);
    this.btnDexPlus.borderWidth = 1;


    this.btnDexMinus = new button(this);
    this.btnDexMinus.textColor = color(0, 0, 0);
    this.btnDexMinus.color = color(225, 225, 225);
    this.btnDexMinus.y = this.lblDex.y;
    this.btnDexMinus.x = 165;
    this.btnDexMinus.width = 25;
    this.btnDexMinus.height = 25;
    this.btnDexMinus.text = "-";
    this.btnDexMinus.rounding = 0;
    this.btnDexMinus.borderColor = color(0, 0, 256);
    this.btnDexMinus.borderWidth = 1;

    this.lblInt = new label(this);
    this.lblInt.textColor = color(0, 0, 0);
    this.lblInt.y = 150;
    this.lblInt.x = 50;
    this.lblInt.width = 75;
    this.lblInt.height = 30;
    this.lblInt.text = "INT: 7";
    this.lblInt.textSize = 21;
    this.lblInt.alignment = 'right';

    this.btnIntPlus = new button(this);
    this.btnIntPlus.textColor = color(0, 0, 0);
    this.btnIntPlus.color = color(225, 225, 225);
    this.btnIntPlus.y = this.lblInt.y;
    this.btnIntPlus.x = 135;
    this.btnIntPlus.width = 25;
    this.btnIntPlus.height = 25;
    this.btnIntPlus.text = "+";
    this.btnIntPlus.rounding = 0;
    this.btnIntPlus.borderColor = color(256, 0, 0);
    this.btnIntPlus.borderWidth = 1;


    this.btnIntMinus = new button(this);
    this.btnIntMinus.textColor = color(0, 0, 0);
    this.btnIntMinus.color = color(225, 225, 225);
    this.btnIntMinus.y = this.lblInt.y;
    this.btnIntMinus.x = 165;
    this.btnIntMinus.width = 25;
    this.btnIntMinus.height = 25;
    this.btnIntMinus.text = "-";
    this.btnIntMinus.rounding = 0;
    this.btnIntMinus.borderColor = color(0, 0, 256);
    this.btnIntMinus.borderWidth = 1;

    this.lblHealth = new label(this);
    this.lblHealth.textColor = color(0, 0, 0);
    this.lblHealth.y = 175;
    this.lblHealth.x = 50;
    this.lblHealth.width = 75;
    this.lblHealth.height = 30;
    this.lblHealth.text = "HP: 7";
    this.lblHealth.textSize = 21;
    this.lblHealth.alignment = 'right';

    this.btnHealthPlus = new button(this);
    this.btnHealthPlus.textColor = color(0, 0, 0);
    this.btnHealthPlus.color = color(225, 225, 225);
    this.btnHealthPlus.y = this.lblHealth.y ;
    this.btnHealthPlus.x = 135;
    this.btnHealthPlus.width = 25;
    this.btnHealthPlus.height = 25;
    this.btnHealthPlus.text = "+";
    this.btnHealthPlus.rounding = 0;
    this.btnHealthPlus.borderColor = color(256, 0, 0);
    this.btnHealthPlus.borderWidth = 1;


    this.btnHealthMinus = new button(this);
    this.btnHealthMinus.textColor = color(0, 0, 0);
    this.btnHealthMinus.color = color(225, 225, 225);
    this.btnHealthMinus.y = this.lblHealth.y ;
    this.btnHealthMinus.x = 165;
    this.btnHealthMinus.width = 25;
    this.btnHealthMinus.height = 25;
    this.btnHealthMinus.text = "-";
    this.btnHealthMinus.rounding = 0;
    this.btnHealthMinus.borderColor = color(0, 0, 256);
    this.btnHealthMinus.borderWidth = 1;

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

    this.drawables.push(this.btnBack);
    this.drawables.push(this.btnFight);

    this.drawables.push(this.lblHeader);
    this.drawables.push(this.lblPoints);

    this.drawables.push(this.lblStr);
    this.drawables.push(this.btnStrPlus);
    this.drawables.push(this.btnStrMinus);

    this.drawables.push(this.lblDex);
    this.drawables.push(this.btnDexPlus);
    this.drawables.push(this.btnDexMinus);

    this.drawables.push(this.lblInt);
    this.drawables.push(this.btnIntPlus);
    this.drawables.push(this.btnIntMinus);

    this.drawables.push(this.lblHealth);
    this.drawables.push(this.btnHealthPlus);
    this.drawables.push(this.btnHealthMinus);

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
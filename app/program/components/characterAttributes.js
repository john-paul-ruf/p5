class characterAttributes extends container {
  constructor(owner, player) {
    super(owner);
    this.player = player;
  }

  init() {
    this.color = color(256, 256, 256);
    this.x = 50;
    this.y = 50;
    this.width = 275;
    this.height = 175;
    this.borderWidth = 0;
    this.rounding = 0;
    this.visible = true;
    this.dropShadow = false;

    this.lblPoints = new label(this);
    this.lblPoints.textColor = color(0, 0, 0);
    this.lblPoints.y = 5;
    this.lblPoints.x = 0;
    this.lblPoints.width = 275;
    this.lblPoints.height = 50;
    this.lblPoints.text = `Distribute ${this.player.availablePoints} points`;
    this.lblPoints.alignment = 'center';
    this.lblPoints.textSize = 21;

    this.lblStr = new label(this);
    this.lblStr.textColor = color(0, 0, 0);
    this.lblStr.y = 55;
    this.lblStr.x = 25;
    this.lblStr.width = 100;
    this.lblStr.height = 30;
    this.lblStr.text = `STR: ${this.player.STR}`;
    this.lblStr.textSize = 21;
    this.lblStr.alignment = 'right';

    this.plusClick = function () {
      this.container.player.addPoint(this.attribute);
      this.container.updateText();
    };

    this.minusClick = function () {
      this.container.player.subtractPoint(this.attribute);
      this.container.updateText();
    };

    this.btnStrPlus = new button(this);
    this.btnStrPlus.textColor = color(0, 0, 0);
    this.btnStrPlus.color = color(225, 225, 225);
    this.btnStrPlus.y = this.lblStr.y;
    this.btnStrPlus.x = 155;
    this.btnStrPlus.width = 25;
    this.btnStrPlus.height = 25;
    this.btnStrPlus.text = "+";
    this.btnStrPlus.rounding = 0;
    this.btnStrPlus.borderColor = color(256, 0, 0);
    this.btnStrPlus.borderWidth = 1;
    this.btnStrPlus.subscribe(this.plusClick);
    this.btnStrPlus.attribute = 'STR';

    this.btnStrMinus = new button(this);
    this.btnStrMinus.textColor = color(0, 0, 0);
    this.btnStrMinus.color = color(225, 225, 225);
    this.btnStrMinus.y = this.lblStr.y;
    this.btnStrMinus.x = 185;
    this.btnStrMinus.width = 25;
    this.btnStrMinus.height = 25;
    this.btnStrMinus.text = "-";
    this.btnStrMinus.rounding = 0;
    this.btnStrMinus.borderColor = color(0, 0, 256);
    this.btnStrMinus.borderWidth = 1;
    this.btnStrMinus.subscribe(this.minusClick);
    this.btnStrMinus.attribute = 'STR';

    this.lblDex = new label(this);
    this.lblDex.textColor = color(0, 0, 0);
    this.lblDex.y = 85;
    this.lblDex.x = 25;
    this.lblDex.width = 100;
    this.lblDex.height = 30;
    this.lblDex.text = `DEX: ${this.player.DEX}`;
    this.lblDex.textSize = 21;
    this.lblDex.alignment = 'right';

    this.btnDexPlus = new button(this);
    this.btnDexPlus.textColor = color(0, 0, 0);
    this.btnDexPlus.color = color(225, 225, 225);
    this.btnDexPlus.y = this.lblDex.y;
    this.btnDexPlus.x = 155;
    this.btnDexPlus.width = 25;
    this.btnDexPlus.height = 25;
    this.btnDexPlus.text = "+";
    this.btnDexPlus.rounding = 0;
    this.btnDexPlus.borderColor = color(256, 0, 0);
    this.btnDexPlus.borderWidth = 1;
    this.btnDexPlus.subscribe(this.plusClick);
    this.btnDexPlus.attribute = 'DEX';

    this.btnDexMinus = new button(this);
    this.btnDexMinus.textColor = color(0, 0, 0);
    this.btnDexMinus.color = color(225, 225, 225);
    this.btnDexMinus.y = this.lblDex.y;
    this.btnDexMinus.x = 185;
    this.btnDexMinus.width = 25;
    this.btnDexMinus.height = 25;
    this.btnDexMinus.text = "-";
    this.btnDexMinus.rounding = 0;
    this.btnDexMinus.borderColor = color(0, 0, 256);
    this.btnDexMinus.borderWidth = 1;
    this.btnDexMinus.subscribe(this.minusClick);
    this.btnDexMinus.attribute = 'DEX';

    this.lblInt = new label(this);
    this.lblInt.textColor = color(0, 0, 0);
    this.lblInt.y = 115;
    this.lblInt.x = 25;
    this.lblInt.width = 100;
    this.lblInt.height = 30;
    this.lblInt.text = `INT: ${this.player.INT}`;
    this.lblInt.textSize = 21;
    this.lblInt.alignment = 'right';

    this.btnIntPlus = new button(this);
    this.btnIntPlus.textColor = color(0, 0, 0);
    this.btnIntPlus.color = color(225, 225, 225);
    this.btnIntPlus.y = this.lblInt.y;
    this.btnIntPlus.x = 155;
    this.btnIntPlus.width = 25;
    this.btnIntPlus.height = 25;
    this.btnIntPlus.text = "+";
    this.btnIntPlus.rounding = 0;
    this.btnIntPlus.borderColor = color(256, 0, 0);
    this.btnIntPlus.borderWidth = 1;
    this.btnIntPlus.subscribe(this.plusClick);
    this.btnIntPlus.attribute = 'INT';

    this.btnIntMinus = new button(this);
    this.btnIntMinus.textColor = color(0, 0, 0);
    this.btnIntMinus.color = color(225, 225, 225);
    this.btnIntMinus.y = this.lblInt.y;
    this.btnIntMinus.x = 185;
    this.btnIntMinus.width = 25;
    this.btnIntMinus.height = 25;
    this.btnIntMinus.text = "-";
    this.btnIntMinus.rounding = 0;
    this.btnIntMinus.borderColor = color(0, 0, 256);
    this.btnIntMinus.borderWidth = 1;
    this.btnIntMinus.subscribe(this.minusClick);
    this.btnIntMinus.attribute = 'INT';

    this.lblHealth = new label(this);
    this.lblHealth.textColor = color(0, 0, 0);
    this.lblHealth.y = 145;
    this.lblHealth.x = 25;
    this.lblHealth.width = 100;
    this.lblHealth.height = 30;
    this.lblHealth.text = `HP: ${this.player.HP}`;
    this.lblHealth.textSize = 21;
    this.lblHealth.alignment = 'right';

    this.btnHealthPlus = new button(this);
    this.btnHealthPlus.textColor = color(0, 0, 0);
    this.btnHealthPlus.color = color(225, 225, 225);
    this.btnHealthPlus.y = this.lblHealth.y;
    this.btnHealthPlus.x = 155;
    this.btnHealthPlus.width = 25;
    this.btnHealthPlus.height = 25;
    this.btnHealthPlus.text = "+";
    this.btnHealthPlus.rounding = 0;
    this.btnHealthPlus.borderColor = color(256, 0, 0);
    this.btnHealthPlus.borderWidth = 1;
    this.btnHealthPlus.subscribe(this.plusClick);
    this.btnHealthPlus.attribute = 'HP';

    this.btnHealthMinus = new button(this);
    this.btnHealthMinus.textColor = color(0, 0, 0);
    this.btnHealthMinus.color = color(225, 225, 225);
    this.btnHealthMinus.y = this.lblHealth.y;
    this.btnHealthMinus.x = 185;
    this.btnHealthMinus.width = 25;
    this.btnHealthMinus.height = 25;
    this.btnHealthMinus.text = "-";
    this.btnHealthMinus.rounding = 0;
    this.btnHealthMinus.borderColor = color(0, 0, 256);
    this.btnHealthMinus.borderWidth = 1;
    this.btnHealthMinus.subscribe(this.minusClick);
    this.btnHealthMinus.attribute = 'HP';

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

    this.clickables.push(this.btnStrPlus);
    this.clickables.push(this.btnStrMinus);

    this.clickables.push(this.btnDexPlus);
    this.clickables.push(this.btnDexMinus);

    this.clickables.push(this.btnIntPlus);
    this.clickables.push(this.btnIntMinus);

    this.clickables.push(this.btnHealthPlus);
    this.clickables.push(this.btnHealthMinus);

  }
  updateText() {
    this.lblPoints.text = `Distribute ${this.player.availablePoints} points`;
    this.lblStr.text = `STR: ${this.player.STR}`;
    this.lblDex.text = `DEX: ${this.player.DEX}`;
    this.lblInt.text = `INT: ${this.player.INT}`;
    this.lblHealth.text = `HP: ${this.player.HP}`;
  }
}
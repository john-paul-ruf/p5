class aboutMenu extends container {
  constructor(owner) {
    super(owner);

    this.color = color(256, 256, 256);
    this.x = 50;
    this.y = 500;
    this.width = 400;
    this.height = 400;
    this.borderWidth = 3;
    this.borderColor = color(0, 256, 0);
    this.rounding = 10;
    this.visible = true;
    this.dropShadow = true;

    this.lblHeader = new label(this);
    this.lblHeader.textColor = color(0, 0, 0);
    this.lblHeader.y = 20;
    this.lblHeader.x = 0;
    this.lblHeader.width = 400;
    this.lblHeader.height = 50;
    this.lblHeader.text = "About";
    this.lblHeader.textSize = 26;
    this.lblHeader.alignment = 'center';

    this.lbl1 = new label(this);
    this.lbl1.textColor = color(0, 0, 0);
    this.lbl1.y = 80;
    this.lbl1.x = 0;
    this.lbl1.width = 400;
    this.lbl1.height = 50;
    this.lbl1.text = "Created by John Ruf";
    this.lbl1.textSize = 16;
    this.lbl1.alignment = 'center';

    this.lbl2 = new label(this);
    this.lbl2.textColor = color(0, 0, 0);
    this.lbl2.y = 140;
    this.lbl2.x = 0;
    this.lbl2.width = 400;
    this.lbl2.height = 50;
    this.lbl2.text = "https://github.com/john-paul-ruf/p5";
    this.lbl2.textSize = 18;
    this.lbl2.alignment = 'center';

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

    this.drawables.push(this.lblHeader);
    this.drawables.push(this.lbl1);
    this.drawables.push(this.lbl2);
    this.drawables.push(this.btnBack);
    this.clickables.push(this.btnBack);

    this.backTransition = function () {
      var that = this;
      var inAction = function () {
        if (that.container.y < 500) {
          that.container.owner.mainMenu.y += 20;
          that.container.owner.characterBuilder.y += 20;
          that.container.owner.aboutMenu.y += 20;
          setTimeout(inAction, 50);
        }
      };

      setTimeout(inAction, 50);
    };

    this.btnBack.subscribe(this.backTransition);

    
  }
}
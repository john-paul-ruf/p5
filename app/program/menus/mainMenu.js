class mainMenu extends container {
  constructor(owner) {
    super(owner);

    this.color = color(256, 256, 256);
    this.x = 50;
    this.y = 50;
    this.width = 400;
    this.height = 400;
    this.borderWidth = 3;
    this.borderColor = color(0, 256, 0);
    this.rounding = 10;

    this.lblHeader = new label(this);
    this.lblHeader.textColor = color(0, 0, 0);
    this.lblHeader.y = 20;
    this.lblHeader.x = 0;
    this.lblHeader.width = 400;
    this.lblHeader.height = 50;
    this.lblHeader.text = "p5.js - Arena RPG Template";
    this.lblHeader.textSize = 26;
    this.lblHeader.alignment = 'center';

    this.btnCreateCharacter = new button(this);
    this.btnCreateCharacter.textColor = color(0, 0, 0);
    this.btnCreateCharacter.color = color(225, 225, 225);
    this.btnCreateCharacter.y = 100;
    this.btnCreateCharacter.x = 100;
    this.btnCreateCharacter.width = 200;
    this.btnCreateCharacter.height = 50;
    this.btnCreateCharacter.text = "Create Character";
    this.btnCreateCharacter.rounding = 10;
    this.btnCreateCharacter.borderColor = color(0, 256, 0);
    this.btnCreateCharacter.borderWidth = 1;

    this.btnAbout = new button(this);
    this.btnAbout.textColor = color(0, 0, 0);
    this.btnAbout.color = color(225, 225, 225);
    this.btnAbout.y = 175;
    this.btnAbout.x = 100;
    this.btnAbout.width = 200;
    this.btnAbout.height = 50;
    this.btnAbout.text = "About";
    this.btnAbout.rounding = 10;
    this.btnAbout.borderColor = color(0, 256, 0);
    this.btnAbout.borderWidth = 1;

    this.drawables.push(this.lblHeader);
    this.drawables.push(this.btnCreateCharacter);
    this.drawables.push(this.btnAbout);

    this.clickables.push(this.btnCreateCharacter);
    this.clickables.push(this.btnAbout);

    this.characterTransition = function () {
      var that = this;
      var inAction = function () {
        if (that.container.y < 510) {
          that.container.y += 20;
          that.container.owner.characterBuilder.y += 20;
          that.container.owner.aboutMenu.y += 20;
          setTimeout(inAction, 50);
        } 
      };

      setTimeout(inAction, 50);
    };

    this.btnCreateCharacter.subscribe(this.characterTransition);

    this.aboutTransition = function () {
      var that = this;
      var inAction = function () {
        if (that.container.y > -400) {
          that.container.y -= 20;
          that.container.owner.characterBuilder.y -= 20;
          that.container.owner.aboutMenu.y -= 20;
          setTimeout(inAction, 50);
        }
      };

      setTimeout(inAction, 50);
    };


    this.btnAbout.subscribe(this.aboutTransition);
  }
}
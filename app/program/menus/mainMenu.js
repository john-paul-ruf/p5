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

    this.btnCreateCharacter = new button(this);
    this.btnCreateCharacter.textColor = color(128, 128, 128);
    this.btnCreateCharacter.color = color(225, 225, 225);
    this.btnCreateCharacter.y = 100;
    this.btnCreateCharacter.x = 100;
    this.btnCreateCharacter.width = 200;
    this.btnCreateCharacter.height = 50;
    this.btnCreateCharacter.text = "Create Character";
    this.btnCreateCharacter.rounding = 10;

    this.btnPrint = new button(this);
    this.btnPrint.textColor = color(128, 128, 128);
    this.btnPrint.color = color(225, 225, 225);
    this.btnPrint.y = 175;
    this.btnPrint.x = 100;
    this.btnPrint.width = 200;
    this.btnPrint.height = 50;
    this.btnPrint.text = "Print Character to Console";
    this.btnPrint.rounding = 10;

    this.drawables.push(this.btnCreateCharacter);
    this.drawables.push(this.btnPrint);

    this.clickables.push(this.btnCreateCharacter);
    this.clickables.push(this.btnPrint);

    this.transitionedToCharacterBuilder = false;

    this.transition = function () {
      var that = this;
      var inAction = function () {
        if (that.container.y < 510) {
          that.container.y += 20;
          setTimeout(inAction, 50);
        } else {
          that.container.transitionedToCharacterBuilder = true;
        }
      };

      setTimeout(inAction, 50);
    };

    this.btnCreateCharacter.subscribe(this.transition);

    this.logCharacter = function () {
      console.log(this.container.owner.character);
    };

    this.btnPrint.subscribe(this.logCharacter);
  }

  draw() {
    if (this.visible) {
      super.draw();
    }
  };

  onClick() {
    if (this.visible) {
      super.onClick();
    }
  }
}
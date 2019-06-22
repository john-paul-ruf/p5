class program {
  constructor() {
    this.setup = function () {
      createCanvas(500, 500);

      this.character = {};

      this.menu = new container();

      this.menu.color = color(256, 256, 256);
      this.menu.x = 50;
      this.menu.y = 50;
      this.menu.width = 400;
      this.menu.height = 400;
      this.menu.borderWidth = 3;
      this.menu.borderColor = color(0, 256, 0);
      this.menu.rounding = 10;

      this.btnCreateCharacter = new button(this.menu);
      this.btnCreateCharacter.textColor = color(128, 128, 128);
      this.btnCreateCharacter.color = color(225, 225, 225);
      this.btnCreateCharacter.y = 50;
      this.btnCreateCharacter.x = 100;
      this.btnCreateCharacter.width = 200;
      this.btnCreateCharacter.height = 50;
      this.btnCreateCharacter.text = "Create Character";
      this.btnCreateCharacter.rounding = 10;

      this.btnPrint = new button(this.menu);
      this.btnPrint.textColor = color(128, 128, 128);
      this.btnPrint.color = color(225, 225, 225);
      this.btnPrint.y =150;
      this.btnPrint.x = 100;
      this.btnPrint.width = 200;
      this.btnPrint.height = 50;
      this.btnPrint.text = "Print Character to Console";
      this.btnPrint.rounding = 10;

      this.menu.drawables.push(this.btnCreateCharacter);
      this.menu.drawables.push(this.btnPrint);

      this.menu.clickables.push(this.btnCreateCharacter);
      this.menu.clickables.push(this.btnPrint);

      var btnCreateCharacterClick = function () {
        const temp = this.targetItem.color;
        this.targetItem.color = this.targetItem.borderColor;
        this.targetItem.borderColor = temp;
      };

      this.btnCreateCharacter.subscribe(btnCreateCharacterClick);

      var btnPrint = function () {
        console.log(this.character);
      };

      this.btnPrint.subscribe(btnPrint);
    };

    this.draw = function () {
      background(225);
      this.menu.draw();
    };

    this.mouseClick = function (event) {
      this.menu.onClick();
      
    };
  }
}
class program {
  constructor() {
    this.setup = function () {
      createCanvas(500, 500);

      this.player = new player();

      this.mainMenu = new mainMenu(this);
      this.characterBuilder = new characterBuilderMenu(this);
      this.aboutMenu = new aboutMenu(this);
      
    };

    this.draw = function () {
      background(225);

      this.mainMenu.draw();
      this.characterBuilder.draw();
      this.aboutMenu.draw();
    };

    this.mouseClick = function () {
      this.mainMenu.onClick();
      this.characterBuilder.onClick();
      this.aboutMenu.onClick();
    };
  }
}
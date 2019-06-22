class program {
  constructor() {
    this.setup = function () {
      createCanvas(500, 500);

      this.character = {};

      this.mainMenu = new mainMenu(this);
      this.characterBuilder = new characterBuilderMenu();
      
    };

    this.draw = function () {
      background(225);

      this.characterBuilder.visible = this.mainMenu.transitionedToCharacterBuilder;

      this.mainMenu.draw();
      this.characterBuilder.draw();
    };

    this.mouseClick = function () {
      this.mainMenu.onClick();
      this.characterBuilder.onClick();
    };
  }
}
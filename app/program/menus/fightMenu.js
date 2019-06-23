class fightMenu extends container {
  constructor(owner) {
    super(owner);

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
    this.clickables.push(this.btnBack);

    this.backTransition = function () {
      //var that = this;
      //var inAction = function () {
      //  if (that.container.y < 500) {
      //    that.container.owner.mainMenu.y += 20;
      //    that.container.owner.characterBuilder.y += 20;
      //    that.container.owner.aboutMenu.y += 20;
      //    setTimeout(inAction, 50);
      //  }
      //};

      //setTimeout(inAction, 50);
    };

    this.btnBack.subscribe(this.backTransition);


  }
}

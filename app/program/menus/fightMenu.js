class fightMenu extends container {
  constructor(owner) {
    super(owner);

    this.x = 50;
    this.y = -800;
    this.color = color(256, 256, 256);
    this.width = 400;
    this.height = 400;
    this.borderWidth = 3;
    this.borderColor = color(0, 256, 0);
    this.rounding = 10;
    this.visible = true;
    this.dropShadow = true;

    this.playerPanel = new fighterPanel(this, owner.player);
    //this.villainPanel = new fighterPanel(this, new villain(owner.player.level));

    this.playerPanel.x = 50;
    this.playerPanel.y = 50;

    //this.villainPanel.x = 200;
    //this.villainPanel.y = 50;

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

    this.drawables.push(this.btnBack);
    this.drawables.push(this.playerPanel);
    //this.drawables.push(this.villainPanel);

    this.clickables.push(this.btnBack);


  }
}

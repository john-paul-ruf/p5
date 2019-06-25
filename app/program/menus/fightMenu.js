class fightMenu extends container {
  constructor(owner) {
    super(owner);
  }

  init() {

    this.enemy = new villain(this.owner.player.level);
    this.enemy.init();

    this.player = this.owner.player;

    this.x = 50;
    this.y = -875;
    this.color = color(256, 256, 256);
    this.width = 400;
    this.height = 400;
    this.borderWidth = 3;
    this.borderColor = color(0, 256, 0);
    this.rounding = 10;
    this.visible = true;
    this.dropShadow = true;
    this.showPlayerPanelMouseOver = false;

    this.playerPanel = new fighterPanel(this, this.player);
    this.playerPanel.init();
 
    this.villainPanel = new fighterPanel(this, this.enemy);
    this.villainPanel.init();

    this.playerPanel.x = 50;
    this.playerPanel.y = 50;

    this.villainPanel.x = 200;
    this.villainPanel.y = 50;


    this.btnAttack = new button(this);
    this.btnAttack.textColor = color(0, 0, 0);
    this.btnAttack.color = color(225, 225, 225);
    this.btnAttack.y = 250;
    this.btnAttack.x = 100;
    this.btnAttack.width = 200;
    this.btnAttack.height = 50;
    this.btnAttack.text = "Attack!";
    this.btnAttack.rounding = 10;
    this.btnAttack.borderColor = color(256, 0, 0);
    this.btnAttack.borderWidth = 1;
    this.btnAttack.dropShadow = true;

    this.attack = function () {
      this.container.player.attack(this.container.enemy);
      this.container.enemy.attack(this.container.player);
     
    };

    this.btnAttack.subscribe(this.attack);


    this.btnBack = new button(this);
    this.btnBack.textColor = color(0, 0, 0);
    this.btnBack.color = color(225, 225, 225);
    this.btnBack.y = 325;
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
        if (that.container.y > -400) {
          that.container.owner.characterBuilder.y -= 20;
          that.container.owner.mainMenu.y -= 20;
          that.container.owner.fightMenu.y -= 20;
          that.container.owner.aboutMenu.y -= 20;
          setTimeout(inAction, 50);
        }
      };

      setTimeout(inAction, 50);
    };

    this.btnBack.subscribe(this.backTransition);

    this.drawables.push(this.btnAttack);
    this.drawables.push(this.btnBack);
    this.drawables.push(this.playerPanel);
    this.drawables.push(this.villainPanel);

    if (this.showPlayerPanelMouseOver) {
      this.drawables.push(this.characterAttributes);
    }

    this.clickables.push(this.btnBack);
    this.clickables.push(this.btnAttack);
  }

  draw() {
    if (this.visible) {
      super.draw();
      this.playerPanel.health.current = this.player.currentHP;
      this.villainPanel.health.current = this.enemy.currentHP;
    }
  }
  
}

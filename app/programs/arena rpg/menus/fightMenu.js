class FightMenu extends Container {
  constructor(owner) {
    super(owner);
  }

  init() {

    this.enemy = new Villain(ArenaRPG.player.level);
    this.enemy.init();

    ArenaRPG.player;

    this.battleNumber = 1;
    this.totalBattles = 3;

    this.x = 50;
    this.y = -875;
    this.color = Config.menuBackground;
    this.width = 400;
    this.height = 400;
    this.borderWidth = 3;
    this.borderColor = Config.menuBorders;
    this.rounding = 10;
    this.visible = true;
    this.dropShadow = true;
    this.showPlayerPanelMouseOver = false;

    this.lblHeader = new Label(this);
    this.lblHeader.textColor = Config.menuText;
    this.lblHeader.y = 10;
    this.lblHeader.x = 0;
    this.lblHeader.width = 400;
    this.lblHeader.height = 50;
    this.lblHeader.text = `Battle Number ${this.battleNumber}`;
    this.lblHeader.textSize = 26;
    this.lblHeader.alignment = 'center';

    this.playerPanel = new FighterPanel(this, ArenaRPG.player);
    this.playerPanel.init();
 
    this.villainPanel = new FighterPanel(this, this.enemy);
    this.villainPanel.init();

    this.playerPanel.x = 50;
    this.playerPanel.y = 50;

    this.villainPanel.x = 200;
    this.villainPanel.y = 50;


    this.btnAttack = new Button(this);
    this.btnAttack.textColor = Config.buttonText;
    this.btnAttack.color = Config.attackButtonBackground;
    this.btnAttack.y = 250;
    this.btnAttack.x = 100;
    this.btnAttack.width = 200;
    this.btnAttack.height = 50;
    this.btnAttack.text = "Attack!";
    this.btnAttack.rounding = 10;
    this.btnAttack.borderColor = Config.attackButtonBorder;
    this.btnAttack.borderWidth = 1;
    this.btnAttack.dropShadow = true;

    this.attack = function () {
      ArenaRPG.player.attack(this.container.enemy);
      this.container.enemy.attack(ArenaRPG.player);

      if (this.container.enemy.currentHP <= 0) {
        this.container.battleNumber++;
        this.container.btnLeaveWeapon.visible = true;
        this.container.btnTakeWeapon.visible = true;
        this.container.btnAttack.visible = false;
        this.container.updateText();
        if (this.battleNumber === this.totalBattles) {
          this.LevelUp = true;
        }
      }

      if (ArenaRPG.player.currentHP < 0) {
        ArenaRPG.player = new Player();
        ArenaRPG.player.init();

        this.container.owner.characterBuilder.characterAttributes.updateText();

        var that = this;
        var inAction = function () {
          if (that.container.y > -400) {
            that.container.owner.characterBuilder.y -= 20;
            that.container.owner.mainMenu.y -= 20;
            that.container.owner.fightMenu.y -= 20;
            setTimeout(inAction, 50);
          }
        };
        setTimeout(inAction, 50);
      }
    };

    this.btnAttack.subscribe(this.attack);

    this.btnTakeWeapon = new Button(this);
    this.btnTakeWeapon.textColor = Config.buttonText;
    this.btnTakeWeapon.color = Config.buttonBackground;
    this.btnTakeWeapon.y = 325;
    this.btnTakeWeapon.x = 225;
    this.btnTakeWeapon.width = 150;
    this.btnTakeWeapon.height = 50;
    this.btnTakeWeapon.text = "Take Weapon";
    this.btnTakeWeapon.rounding = 10;
    this.btnTakeWeapon.borderColor = Config.buttonBorders;
    this.btnTakeWeapon.borderWidth = 1;
    this.btnTakeWeapon.dropShadow = true;

    this.takeWeapon = function () {
      ArenaRPG.player.weapon = this.container.enemy.weapon;
      this.container.btnLeaveWeapon.visible = false;
      this.container.btnTakeWeapon.visible = false;
      this.container.btnAttack.visible = true;
      this.container.updateGameState();
    };

    this.btnTakeWeapon.subscribe(this.takeWeapon);

    this.btnLeaveWeapon = new Button(this);
    this.btnLeaveWeapon.textColor = Config.buttonText;
    this.btnLeaveWeapon.color = Config.buttonBackground;
    this.btnLeaveWeapon.y = 325;
    this.btnLeaveWeapon.x = 25;
    this.btnLeaveWeapon.width = 150;
    this.btnLeaveWeapon.height = 50;
    this.btnLeaveWeapon.text = "Leave Weapon";
    this.btnLeaveWeapon.rounding = 10;
    this.btnLeaveWeapon.borderColor = Config.buttonBorders;
    this.btnLeaveWeapon.borderWidth = 1;
    this.btnLeaveWeapon.dropShadow = true;

    this.leaveWeapon = function () {
      this.container.btnLeaveWeapon.visible = false;
      this.container.btnTakeWeapon.visible = false;
      this.container.btnAttack.visible = true;
      this.container.updateGameState();
    };

    this.btnLeaveWeapon.subscribe(this.leaveWeapon);

    this.drawables.push(this.btnAttack);
    this.drawables.push(this.playerPanel);
    this.drawables.push(this.villainPanel);
    this.drawables.push(this.lblHeader);
    this.drawables.push(this.btnTakeWeapon);
    this.drawables.push(this.btnLeaveWeapon);

    if (this.showPlayerPanelMouseOver) {
      this.drawables.push(this.characterAttributes);
    }

    this.clickables.push(this.btnAttack);
    this.clickables.push(this.btnTakeWeapon);
    this.clickables.push(this.btnLeaveWeapon);

    this.btnLeaveWeapon.visible = false;
    this.btnTakeWeapon.visible = false;
    this.btnAttack.visible = true;
  }

  updateText() {
    this.lblHeader.text = `Battle Number ${this.battleNumber}`;
  }

  resetBattleNumber() {
    this.battleNumber = 1;
  }

  updateGameState() {
    this.enemy = new Villain(ArenaRPG.player.level);
    this.enemy.init();
    this.villainPanel.target = this.enemy;
    ArenaRPG.player.currentHP = ArenaRPG.player.HP;

    this.villainPanel.updateText();
    this.playerPanel.updateText();
  }

  draw() {
    if (this.visible) {
      super.draw();
      this.playerPanel.health.current = ArenaRPG.player.currentHP;
      this.villainPanel.health.current = this.enemy.currentHP;
    }
  }
  
}

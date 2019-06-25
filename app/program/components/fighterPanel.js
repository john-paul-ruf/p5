class fighterPanel extends container {
  constructor(owner, target) {
    super(owner);
    this.target = target;
  }

  init() {

    this.color = color(256, 256, 256);
    this.width = 125;
    this.height = 180;
    this.borderWidth = 0;
    this.rounding = 0;
    this.visible = true;
    this.dropShadow = false;

    this.npc = npc;

    this.portrait = new button(this);
    this.portrait.textColor = color(0, 0, 0);
    this.portrait.color = color(256, 256, 256);
    this.portrait.y = 10;
    this.portrait.x = 10;
    this.portrait.width = 100;
    this.portrait.height = 100;
    this.portrait.text = this.target instanceof villain ? "Villain" : 'Player';
    this.portrait.rounding = 0;
    this.portrait.borderColor = color(0, 0, 0);
    this.portrait.borderWidth = 1;
    this.portrait.dropShadow = false;

    this.health = new progressBar(this, this.target.HP);
    this.health.color = color(128, 128, 128);
    this.health.y = 120;
    this.health.x = 10;
    this.health.width = 100;
    this.health.height = 10;
    this.health.progressColor = color(256, 0, 0);
    this.health.rounding = 0;
    this.health.borderColor = color(0, 0, 0);
    this.health.borderWidth = 1;
    this.health.dropShadow = false;

    this.weapon = new label(this);
    this.weapon.textColor = color(0, 0, 0);
    this.weapon.y = 140;
    this.weapon.x = 10;
    this.weapon.width = 125;
    this.weapon.height = 30;
    this.weapon.text = this.target.weapon.name;
    this.weapon.textSize = 16;
    this.weapon.alignment = 'left';

    this.drawables.push(this.portrait);
    this.drawables.push(this.health);
    this.drawables.push(this.weapon);
  }

}
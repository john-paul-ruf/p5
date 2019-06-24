class player extends npc {
  constructor() {
    super();
    this.availablePoints = 5;
    this.fightsSurvived = 0;
    this.level = Math.floor(this.fightsSurvived / 3);
    this.weapon = new weapon('Basic', 0, 2, 'ANY');
  }

  addPoint(attribute) {
    if (this.availablePoints > 0) {
      switch (attribute.toUpperCase()) {
        case 'STR':
          this.STR++;
          break;
        case 'DEX':
          this.DEX++;
          break;
        case 'INT':
          this.INT++;
          break;
        case 'HP':
          this.HP++;
          break;
      }

      this.availablePoints--;
    }
  }

  subtractPoint(attribute) {
      switch (attribute.toUpperCase()) {
        case 'STR':
          if (this.STR > 7) {
            this.STR--;
            this.availablePoints++;
          }
          break;
        case 'DEX':
          if (this.DEX > 7) {
            this.DEX--;
            this.availablePoints++;
          }
          break;
        case 'INT':
          if (this.INT > 7) {
            this.INT--;
            this.availablePoints++;
          }
          break;
        case 'HP':
          if (this.HP > 7) {
            this.HP--;
            this.availablePoints++;
          }
          break;
      }
  }

  attack(npc) {

    const getDamage = new function (statValue, npc) {
      const d20 = new dice().max = 20;
      let damage = 0;
      const hitRoll = d20.roll();
      if (hitRoll + statValue / 2 > npc.DEX) {
        damage = damage.weapon.getDamage();
      }

      return hitRoll === 20 ? damage * 2 : damage;
    };

    switch (this.weapon.stat) {
      case 'STR':
        npc.hp -= getDamage(this.STR, npc);
        break;
      case 'DEX':
        npc.hp -= getDamage(this.DEX, npc);
        break;

      case 'INT':
        npc.hp -= getDamage(this.INT, npc);
        break;
      default:
        npc.hp -= getDamage(_.max([this.STR, this.INT, this.DEX]), npc);
        break;

    }
  }

  defendAgainst(npc) {

  }
};
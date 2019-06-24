class npc {
  constructor() {
    this.STR = 7;
    this.DEX = 7;
    this.INT = 7;
    this.HP = 7;
 
    this.weapon = new weapon();
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
};
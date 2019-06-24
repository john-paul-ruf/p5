class weapon {
  constructor(name, min, max, stat) {
    this.name = name;
    this.minDamage = min;
    this.maxDamage = max;
    this.stat = stat;
    this.modifications = [];
  }

  getDamage() {
    const dice = new dice().max = max;
    const dmgRoll = dice.roll();
    return dmgRoll < min ? min : dmgRoll;
  }
};
class weapon {
  constructor(name, min, max, stat) {
    this.name = name;
    this.minDamage = min;
    this.maxDamage = max;
    this.stat = stat;
    this.modifications = [];
  }
};
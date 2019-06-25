class villain extends player {
  constructor(level) {
    super();
    this.availablePoints = 5 + level;
  }

  init() {
    this.weapon = lootGenerator.generateWeapon();

    this.die = new dice(4);
    while (this.availablePoints > 0) {
      this.randoAssignPoints();
    }
  }

  randoAssignPoints() {
    if (this.availablePoints > 0) {
      switch (this.die.roll()) {
        case 1:
          this.addPoint('STR');
          break;
        case 2:
          this.addPoint('DEX');
          break;
        case 3:
          this.addPoint('INT');
          break;
        case 4:
          this.addPoint('HP');
          break;
      }
    }
  };
};
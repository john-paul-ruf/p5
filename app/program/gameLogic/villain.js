class villain extends player {
  constructor(level) {
    super();
    this.availablePoints = 5 + level;
  }

  init() {
    this.weapon = lootGenerator.generateWeapon();

    const die = new dice(4);
    var randoAssignPoints = new function () {
      if (this.availablePoints > 0) {
        switch (die.roll()) {
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

    while (this.availablePoints < 0) {
      randoAssignPoints();
    }
  }
};
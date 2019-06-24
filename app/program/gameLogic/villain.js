class villain extends player {
  constructor(level) {
    super();
    this.availablePoints = 5 + level;
    this.weapon = lootGenerator.generateWeapon();

    const dice = new dice(4);
    var randoAssignPoints = new function () {
      if (this.availablePoints > 0) {
        switch (dice.roll()) {
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
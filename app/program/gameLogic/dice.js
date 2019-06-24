class dice {
  constructor(max) {
    this.max = max;
  }

  roll() {
    return Math.floor(Math.random() * Math.floor(this.max));
  }
};



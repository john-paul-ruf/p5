class dice {
  constructor() {
    this.max = 20;
  }

  roll() {
    return Math.floor(Math.random() * Math.floor(this.max));
  }
};



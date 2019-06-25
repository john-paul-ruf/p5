class dice {
  constructor(max) {
    this.max = max;
  }

  roll() {
    const value = Math.floor(Math.random() * Math.floor(this.max));
    return value === 0 ? 1 : value;
  }
};



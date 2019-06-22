class container extends drawable {
  constructor(owner) {
    super();
    this.drawables = [];
    this.clickables = [];
    this.owner = owner;
  }

  draw() {
    if (this.visible) {
      super.draw();
      _.forEach(this.drawables, d => { d.draw(this); });
    }
  };

  onClick() {
    if (this.visible) {
      _.forEach(this.clickables, c => { c.onClick(); });
    }
  }
}
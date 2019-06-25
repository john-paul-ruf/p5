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

  get relativeX() {

    if (this.owner instanceof container) {
      return this.owner.relativeX + this.x;
    }

    return this.x;
  }

  get relativeY() {
    if (this.owner instanceof container) {
      return this.owner.relativeY + this.y;
    }

    return this.y;
  }
}
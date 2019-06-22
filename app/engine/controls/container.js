class container extends drawable {
  constructor() {
    super();
    this.drawables = [];
    this.clickables = [];
  }

  draw() {
    if (this.visible) {
      super.draw();
      _.forEach(this.drawables, d => { d.draw(this); });
    }
  };

  onClick(event) {
    if (this.visible) {
      _.forEach(this.clickables, c => { c.clicked(event); });
    }
  }
}
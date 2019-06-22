class characterBuilderMenu extends container {
  constructor(owner) {
    super(owner);

    this.color = color(256, 256, 256);
    this.x = 50;
    this.y = 50;
    this.width = 400;
    this.height = 400;
    this.borderWidth = 3;
    this.borderColor = color(0, 256, 0);
    this.rounding = 10;
    this.visible = false;

  }

  draw() {
    if (this.visible) {
      super.draw();
    }
  };

  onClick() {
    if (this.visible) {
      super.onClick();
    }
  }
}
class drawable {
  constructor() {
    this.handlers = [];
    this.x = 0;
    this.y = 0;
    this.height = 100;
    this.width = 100;
    this.borderWidth = 0;
    this.rounding = 0;
    this.dropShadow = false;
    this.dropShadowOffset = 7;
    this.color = undefined;
    this.borderColor = undefined;
    this.visible = true;
  }

  draw() {
    if (this.visible) {

      if (this.dropShadow) {
        fill(color(0, 0, 0, 128));
        rect(this.relativeX + this.dropShadowOffset, this.relativeY + this.dropShadowOffset, this.width, this.height, this.rounding);
      }

      fill(this.color);

      strokeWeight(this.borderWidth);
      if (this.borderColor) {
        stroke(this.borderColor);
      }

      rect(this.relativeX, this.relativeY, this.width, this.height, this.rounding);
      strokeWeight(0);

    }
  }

  get relativeX() {
    return this.container ? this.container.x + this.x : this.x;
  }

  get relativeY() {
    return this.container ? this.container.y + this.y : this.y;
  }
};
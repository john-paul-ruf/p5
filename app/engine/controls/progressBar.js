class progressBar extends drawable {
  constructor(container, max) {
    super();
    this.container = container;

    this.current = max;
    this.max = max;

    this.progressColor = undefined;
  }

  draw() {
    if (this.visible) {
      super.draw();

      fill(this.progressColor);
      rect(this.relativeX, this.relativeY, this.width * (this.current / this.max), this.height);
    }
  }
}
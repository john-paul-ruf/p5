class Sprite extends Drawable {
  constructor(container, imageKey) {
    super();

    this.sprite = loadImage(imageKey);
  }

  draw() {
    if (this.visible) {
      image(this.sprite, this.x, this.y);
    }
  }
}
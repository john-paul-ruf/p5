class Star extends AnimatedSprite {
  constructor(imageKeyArray) {
    super(imageKeyArray);
    this.setTint();
  }

  setTint() {
    this.redTint = this.roll(175, 230);
    this.greenTint = this.roll(175, 230);
    this.blueTint = this.roll(175, 230);
    this.opacity = this.roll(64, 128);
  }

  roll(min, max) {
    return Math.random() * (max - min) + min;
  }

  draw() {
    tint(this.redTint, this.greenTint, this.blueTint, this.opacity);
    if (this.visible) {
      image(this.sprite, this.x, this.y);

      this.ticker++;
      if (this.ticker > 100) {
        this.ticker = 0;
      }

      if (this.ticker % this.animationSpeed === 0) {
        this.setTint();
        this.imageIndex++;

        if (this.imageIndex >= this.imageKeys.length) {
          this.imageIndex = 0;
        }

        this.sprite = this.sprites[this.imageIndex];
      }
    }
    tint(256, 256, 256, 256);
  }
}
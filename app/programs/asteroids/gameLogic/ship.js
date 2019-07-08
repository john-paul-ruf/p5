class Ship extends AnimatedSprite {

  constructor(imageKeyArray) {
    super(imageKeyArray);
  }

  init() {
    this.targetX = this.x;
    this.targetY = this.y;

    this.speed = 7;

    this.handleInteraction = () => {
      this.targetX = mouseX;
      this.targetY = mouseY;
      this.callMove = () => {
        this.move();
        setTimeout(this.callMove, 50);
      };
      setTimeout(this.callMove, 50);
    };

    this.subscribe(this.handleInteraction);
  }

  move() {
    //if (!this.drawing) {
    //  const target = new Victor(this.targetX, this.targetY);
    //  const current = new Victor(this.x, this.y);
    //  const distance = current.distance(target);

    //  if (distance > 5) {
    //    this.direction = MathHelper.direction(target.subtract(current));
    //    this.x += (this.direction.x * this.speed);
    //    this.y += (this.direction.y * this.speed);
    //  }
    //}
  }

  draw() {

    if (this.direction) {
      this.drawing = true;
      push();
      translate(this.x + 16, this.y + 16);
      angleMode(DEGREES);
      rotate(90);
      if (this.visible) {
        image(this.sprite, this.x, this.y);

        this.ticker++;
        if (this.ticker > 100) {
          this.ticker = 0;
        }

        if (this.ticker % this.animationSpeed === 0) {
          this.imageIndex++;

          if (this.imageIndex >= this.imageKeys.length) {
            this.imageIndex = 0;
          }

          this.sprite = this.sprites[this.imageIndex];
        }
      }
      pop();
      this.drawing = false;
    }
    else {
      super.draw();
    }
  }
}
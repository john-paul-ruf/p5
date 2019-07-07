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
    if (!this.drawing) {
      const target = new Victor(this.targetX, this.targetY);
      const current = new Victor(this.x, this.y);
      const distance = current.distance(target);

      if (distance > 5) {
        this.direction = MathHelper.direction(target.subtract(current));
        this.x += (this.direction.x * this.speed);
        this.y += (this.direction.y * this.speed);
      }
    }
  }

  draw() {

    if (this.direction) {
      this.drawing = true;
      push();
      imageMode(CENTER);
      //rotate(90);
      super.draw();
      pop();
      this.drawing = false;
    }
    else {
      super.draw();
    }
  }
}
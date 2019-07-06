class Ship extends AnimatedSprite {

  constructor(imageKeyArray) {
    super(imageKeyArray);
  }

  init() {
    this.targetX = this.x;
    this.targetY = this.y;

    this.turnAngleSpeed = 0.05;
    this.turnSpeed = 0.03;
    this.speed = 0.03;
    this.forward = new Victor(this.width / 2, this.height / 2);

    this.handleInteraction = () => {
      this.dt = 0;

      this.targetX = mouseX;
      this.targetY = mouseY;

      this.callMove = () => {
        this.dt += 0.1;
        this.move(this.dt);
        setTimeout(this.callMove, 50);
      };

      setTimeout(this.callMove, 50);

    };

    this.subscribe(this.handleInteraction);
  }

  move(dt) {

    const target = new Victor(this.targetX, this.targetY);
    const current = new Victor(this.x, this.y);
    const distance = current.distance(target);

    if (distance > 10) {
      this.direction = new Victor(target.x - current.x, target.y - current.y);
      this.direction = this.direction.norm();
      this.angle = this.direction.angle() - this.forward.angle();

      if (this.angle < 0) {
        this.angle += Math.PI * 2;
      }

      if (this.angle > 0.1) {
        if (this.angle < Math.PI) {
          this.forward = this.forward.rotate(this.turnAngleSpeed * dt);
        } else {
          this.forward = this.forward.rotate(-this.turnAngleSpeed * dt);
        }

        this.x = this.x + this.forward.x * this.turnSpeed * dt;
        this.y = this.y + this.forward.y * this.turnSpeed * dt;

      } else {
        this.x = this.x + this.forward.x * this.speed * dt;
        this.y = this.y + this.forward.y * this.speed * dt;
      }

      //this.sprite.rotation = this.forward.angle();
    }
  }
}
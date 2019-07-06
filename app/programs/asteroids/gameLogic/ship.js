class Ship extends Interactive{

  constructor() {
    super();
  }

  move(dt) {

    const target = new Victor(this.targetX, this.targetY);
    const current = new Victor(this.x, this.y);
    const distance = current.distance(target);

    if (distance > 10) {
      let direction = new Victor(target.x - current.x, target.y - current.y);
      direction = direction.norm();
      let angle = direction.angle() - this.forward.angle();

      if (angle < 0) {
        angle += Math.PI * 2;
      }

      if (angle > 0.1) {
        if (angle < Math.PI) {
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
        setTimeout(this.callMove, 100);
      };

      setTimeout(this.callMove, 100);

    };

    this.subscribe(this.handleInteraction);
  }
}
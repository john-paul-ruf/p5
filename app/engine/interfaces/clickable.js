class Clickable extends Drawable {
  constructor() {
    super();
    this.clickHandlers = [];
  }

  clicked() {

    let x = mouseX - (-width / 2, -height / 2);
    let y = mouseY - (-height / 2, -height / 2);

    if (x > this.relativeX && x < this.relativeX + this.width
      && y > this.relativeY && y < this.relativeY + this.height) {
      return true;
    }
    return false;
  };

  subscribe(fn) {
    this.clickHandlers.push(fn);
  };

  unsubscribe(fn) {
    this.clickHandlers = this.handlers.filter(
      function (item) {
        if (item !== fn) {
          return item;
        }
      }
    );
  };

  onClick() {

    this.clickHandlers.forEach((item) => {
      if (this.clicked()) {
        item.call(this);
      }
    });
  };
};

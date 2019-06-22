class clickable extends drawable {
  constructor() {
    super();
    this.handlers = [];
  }

  clicked(event) {
    if (mouseX > this.relativeX && mouseX < this.relativeX + this.width
      && mouseY > this.relativeY && mouseY < this.relativeY + this.height) {
      return true;
    }
    return false;
  };

  subscribe(fn) {
    this.handlers.push(fn);
  };

  unsubscribe(fn) {
    this.handlers = this.handlers.filter(
      function (item) {
        if (item !== fn) {
          return item;
        }
      }
    );
  };

  onClick() {

    this.handlers.forEach((item) => {
      if (this.clicked()) {
        item.call(this);
      }
    });
  };
};

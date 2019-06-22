class clickable {
  constructor() {
    this.handlers = [];
    this.x = 0;
    this.y = 0;
    this.height = 100;
    this.width = 100;

    this.clicked = function (event) {
      if (mouseX > this.x && mouseX < this.x + this.width
        && mouseY > this.y && mouseY < this.y + this.height) {
        return true;
      }
      return false;
    };

    this.subscribe = function (fn) {
      this.handlers.push(fn);
    };

    this.unsubscribe = function (fn) {
      this.handlers = this.handlers.filter(
        function (item) {
          if (item !== fn) {
            return item;
          }
        }
      );
    };

    this.onClick = function (event) {

      this.handlers.forEach((item) => {
        if (this.clicked(event)) {
          event.targetItem = this;
          item.call(event);
        }
      });
    };
  }
};

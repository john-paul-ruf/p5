class clickable {
  constructor() {
    this.handlers = [];
    this.x = 0;
    this.y = 0;
    this.height = 100;
    this.width = 100;

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
        event.targetItem = this;
        item.call(event);
      });
    };
  }
};

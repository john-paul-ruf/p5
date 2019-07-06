class Interactive extends Drawable {
  constructor() {
    super();
    this.clickHandlers = [];
  }

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
        item.call(this);
    });
  };
};

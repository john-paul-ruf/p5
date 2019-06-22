class sketchFactory {
  constructor() {
    this.newSketch = function (setup, draw) {
      return function (sketch) {
        sketch.setup = setup;
        sketch.draw = draw;
      };
    };
  }
}

var sketchFactory = function() {
};


sketchFactory.prototype = (function() {

  var newSketch = function (setup, draw) {
    return function (sketch) {
      sketch.setup = setup;
      sketch.draw = draw;
    };
  };

	return {
        newSketch: newSketch
    };
})();

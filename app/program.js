var program = function () {

};


program.prototype = (function () {


 

  var setup = function () {
    createCanvas(400, 400);

    this.clickableButton = new button();
    this.clickableButton.textColor = color(128, 128, 128);
    this.clickableButton.color = color(0, 0, 0);
    this.clickableButton.borderColor = color(256, 256, 256);

    var onClick = function () {
      this.targetItem.color = color(256, 256, 256);
      this.targetItem.borderColor = color(0, 0, 0);
    };

    this.clickableButton.subscribe(onClick);
  };

  var draw = function () {
    
    this.clickableButton.draw();
  };

  var mouseClick = function (event) {
    this.clickableButton.onClick(event);
  };

    return {
      setup: setup,
      draw: draw,
      mouseClick: mouseClick
    };
  })();
class program {
  constructor() {
    this.setup = function () {
      createCanvas(400, 400);

      this.clickableButton = new button();
      this.clickableButton.textColor = color(128, 128, 128);
      this.clickableButton.color = color(0, 0, 0);
      this.clickableButton.borderColor = color(256, 256, 256);

      var onClick = function () {
        const temp = this.targetItem.color;
        this.targetItem.color = this.targetItem.borderColor;
        this.targetItem.borderColor = temp;
      };

      this.clickableButton.subscribe(onClick);
    };

    this.draw = function () {

      this.clickableButton.draw();
    };

    this.mouseClick = function (event) {
      this.clickableButton.onClick(event);
    };
  }
}
class button extends clickable {
  constructor() {
    super();
    this.x = 150;
    this.y = 200;
    this.height = 100;
    this.width = 200;
    this.borderWidth = 2;
    this.textSize = 14;

    this.text = 'Click Me';
    this.textColor = undefined;
    this.color = undefined;
    this.borderColor = undefined;


    this.draw = function () {
      background(51);

      fill(this.color);
      rect(this.x, this.y, this.width, this.height);

      fill(this.borderColor);
      rect(this.x + this.borderWidth, this.y + this.borderWidth, this.width - this.borderWidth * 2, this.height - this.borderWidth * 2);

      fill(this.textColor);
      text(this.text, this.x, this.y, this.width, this.height);

      textSize(this.textSize);
      textAlign(CENTER, CENTER);
    };
  }
}
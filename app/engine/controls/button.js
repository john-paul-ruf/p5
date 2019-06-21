class button extends clickable {
  constructor() {
    super();
    this.x = 40;
    this.y = 65;
    this.height = 60;
    this.width = 200;
    this.borderWidth = 2;

    this.text = 'text';
    this.textColor = undefined;
    this.color = undefined;
    this.borderColor = undefined;


    this.draw = function () {
      background(51);

      fill(this.color);
      rect(this.x, this.y, this.width, this.height);

      fill(this.borderColor);
      rect(this.x + this.borderWidth, this.y + this.borderWidth, this.width - this.borderWidth * 2, this.height - this.borderWidth * 2);
    };
  }
}
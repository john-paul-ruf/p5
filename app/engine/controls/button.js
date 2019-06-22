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
      strokeWeight(this.borderWidth);
      stroke(this.borderColor);
      rect(this.x, this.y, this.width, this.height);
      strokeWeight(0);
      stroke(0);

      fill(this.textColor);
      textSize(this.textSize);
      textAlign(CENTER, CENTER);
      text(this.text, this.x, this.y, this.width, this.height);
      
    };
  }
}
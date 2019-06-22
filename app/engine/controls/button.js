class button extends clickable {
  constructor() {
    super();
    this.x = 0;
    this.y = 0;
    this.height = 0;
    this.width = 0;
    this.borderWidth =0;
    this.textSize = 0;

    this.text = '';
    this.textColor = undefined;
    this.color = undefined;
    this.borderColor = undefined;


    this.draw = function () {
  
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
class program {
  constructor() {
    this.setup = function () {
      createCanvas(500, 500);

      this.button1 = new button();
      this.button1.textColor = color(128, 128, 128);
      this.button1.color = color(0, 0, 0);
      this.button1.borderColor = color(256, 256, 256);
      this.button1.y = 225;
      this.button1.x = 50;
      this.button1.width = 100;
      this.button1.height = 50;
      this.button1.text = "B1 - Click Me";


      this.button2 = new button();
      this.button2.textColor = color(128, 128, 128);
      this.button2.color = color(0, 0, 0);
      this.button2.borderColor = color(256, 256, 256);
      this.button2.y =225;
      this.button2.x = 350;
      this.button2.width = 100;
      this.button2.height = 50;
      this.button2.text = "B2 - Click Me";

      var onClick = function () {
        const temp = this.targetItem.color;
        this.targetItem.color = this.targetItem.borderColor;
        this.targetItem.borderColor = temp;
      };

      this.button1.subscribe(onClick);
      this.button2.subscribe(onClick);
    };

    this.draw = function () {
      background(51);
      this.button2.draw();
      this.button1.draw();
    };

    this.mouseClick = function (event) {
      this.button1.onClick(event);
      this.button2.onClick(event);
    };
  }
}
class Asteroids {
  constructor() {

  }

  setup() {
    this.canvas = createCanvas(window.innerWidth, window.innerHeight);
  }

  draw() {
    if (Loader.runningProgram === 'asteroids') {
      background(0);
      this.mainMenu.draw();

      if (Asteroids.gameInProgress) {
        this.playerShip.draw();
        _.forEach(this.stars, s => {
          s.draw();
        });
      }
    }
  }

  mouseClick() {
    if (Loader.runningProgram === 'asteroids') {
      this.mainMenu.onClick();

      if (Asteroids.gameInProgress) {
        this.playerShip.onClick();
      }
    }
  }

  init() {

    Config.menuText = color(256, 256, 0);
    Config.menuBorders = color(256, 256, 0);
    Config.menuBackground = color(0, 0, 0);

    Config.buttonText = color(256, 256, 0);
    Config.buttonBorders = color(256, 256, 0);
    Config.buttonBackground = color(0, 0, 0);

    this.mainMenu = new AsteroidsMenu(this);
    this.mainMenu.init();

    var center = function (obj) {
      const x = (innerWidth - obj.width) / 2;
      const y = (innerHeight - obj.height) / 2;
      obj.x = x;
      obj.y = y;
    };

    center(this.mainMenu);

    this.playerShip = new Ship();
    this.playerShip.init();
    this.playerShip.height = 16;
    this.playerShip.width = 16;
    this.playerShip.color = color(256, 256, 0);

    center(this.playerShip);

    // Create the stars
    this.stars = [];
    const starAmount = 500;
    for (let i = 0; i < starAmount; i++) {
      const star = new Star([
        'app/programs/asteroids/assets/star_1.png',
        'app/programs/asteroids/assets/star_2.png',
        'app/programs/asteroids/assets/star_3.png',
        'app/programs/asteroids/assets/star_4.png',
        'app/programs/asteroids/assets/star_5.png'        
        ]);
      center(star);
      randomizeStar(star);
      this.stars.push(star);
    }

    function randomizeStar(star) {
      star.y = Math.floor(Math.random() * Math.floor(window.innerHeight));
      star.x = Math.floor(Math.random() * Math.floor(window.innerWidth));
    }
  }
}

Asteroids.score = 0;
Asteroids.gameInProgress = false;
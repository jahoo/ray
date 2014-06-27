(function() {
  RaY.Data.Levels = [
    {
      name: "Tutorial 1",
      background: {
        fillStyle: "#234",
        width: 640,
        height: 480
      },
      yellowHero: {
        x: 50,
        y: 454
      },
      redHero: {
        x: 560,
        y: 454
      },
      goal: {
        x: 300,
        y: 445
      },
      elements: [
        {
          klass: RaY.Models.Platform,
          elements: [[0, 0, 5, 480, "#fff"], [0, 0, 640, 5, "#fff"], [635, 0, 5, 480, "#fff"], [0, 475, 640, 5, "#fff"]]
        }
      ]
    }, {
      name: "Xtreme",
      background: {
        fillStyle: "#234",
        width: 640,
        height: 480
      },
      yellowHero: {
        x: 15,
        y: 470
      },
      redHero: {
        x: 15,
        y: 280
      },
      goal: {
        x: 610,
        y: 350
      },
      elements: [
        {
          klass: RaY.Models.Platform,
          elements: [[0, 0, 5, 480, "#fff"], [0, 0, 640, 5, "#fff"], [635, 0, 5, 480, "#fff"], [0, 475, 640, 5, "#fff"], [50, 435, 75, 5, "#fff"], [125, 375, 200, 5, "#fff"], [5, 300, 95, 5, "#fff"], [190, 380, 5, 95, "#fff"], [105, 260, 70, 5, "#fff"], [100, 260, 5, 20, "#fff"], [170, 180, 5, 80, "#fff"], [70, 220, 20, 5, "#fff"], [35, 140, 75, 5, "#fff"], [5, 105, 25, 5, "#fff"], [45, 70, 75, 5, "#fff"], [175, 180, 60, 5, "#fff"], [320, 180, 5, 195, "#fff"], [290, 180, 75, 5, "#fff"], [250, 70, 5, 70, "#fff"], [290, 160, 5, 60, "#fff"], [365, 180, 5, 125, "#fff"], [405, 180, 5, 125, "#fff"], [325, 340, 125, 5, "#fff"], [410, 180, 225, 5, "#fff"], [145, 70, 225, 5, "#fff"], [420, 70, 215, 5, "#fff"], [580, 380, 55, 5, "#fff"], [295, 355, 25, 5, "#fff"], [235, 325, 25, 5, "#fff"], [175, 295, 25, 5, "#fff"], [235, 265, 25, 5, "#fff"], [175, 235, 25, 5, "#fff"], [235, 215, 55, 5, "#fff"]]
        }, {
          klass: RaY.Models.Box,
          elements: [[70, 200, "#e92"], [70, 50, "#e92"], [70, 120, "#e92"], [170, 160, "#e92"], [550, 160, "#e92"], [280, 50, "#e92"], [470, 50, "#e92"], [510, 455, "#e92"], [530, 455, "#e92"], [510, 434, "#e92"], [530, 434, "#e92"]]
        }
      ]
    }
  ];

}).call(this);

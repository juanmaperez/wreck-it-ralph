function Game(options){
  this.total = 0;
  this.counter = 120;

  this.ralph = options.ralph;
  this.building = options.building;

  this.loadGame = function(){
    this.building.createBuilding();
    this.building.printBuilding();

    this.ralph.createRalphSpace();
    this.ralph.printRalph();
  };

  this.update = function(){
    this.ralph.moveRalph();
  };

  this.intervalID = setInterval(this.update.bind(this),700);

}

var options = {
  ralph: new Ralph(),
  building: new Building(),
};

var game = new Game(options);
game.loadGame();

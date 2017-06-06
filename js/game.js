function Game(options){
  this.points = 0;
  this.counter = 120;

  this.ralph = options.ralph;
  this.building = options.building;

  this.timeByMove = 900;



  this.loadGame = function(){
    this.building.createBuilding();
    this.printBuilding();

    this.ralph.createRalphSpace();
  };





  this.update = function(totalByMove){
    this.printRalphWrecking();
    var self = this;
    setTimeout(function(){
      self.printRalph();
    },400);
  };


  this.printRalph = function(){
    var self = this;
    self.ralph.moveRalph();

    $('.ralphbox').each(function(){
      $(this).removeClass("ralph");
      $(this).removeClass("ralph-wrecking");
      if($(this).attr("data-column") == self.ralph.row){

        $(this).addClass("ralph");
      }
    });
  };

  this.printRalphWrecking = function(){
    var self = this;
    $('.ralphbox').each(function(){
      $(this).removeClass("ralph");
      $(this).removeClass("ralph-wrecking");
      if($(this).attr("data-column") == self.ralph.row){

        $(this).addClass("ralph-wrecking");
      }
    });
  };




  this.printBuilding = function(){
    var buildingBody = "";
    for(i = 0; i < this.building.windows.length; i++){
      buildingBody += '<div class ="window" data-state="new" data-row="'+ this.building.windows[i].row +'" data-column ="'+ this.building.windows[i].column +'"></div>';
    }
    $('.building').prepend(buildingBody);
  };



  this.intervalID = setInterval(function(){
    var self = this;
    self.update(800);
  }.bind(this),800);

}

var options = {
  ralph: new Ralph(),
  building: new Building(),
};

var game = new Game(options);
game.loadGame();

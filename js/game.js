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
    this.printBuilding();

    this.building.selectWindow(this.ralph.column);

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
      if($(this).attr("data-column") == self.ralph.column){

        $(this).addClass("ralph");
      }
    });
  };

  this.printRalphWrecking = function(){
    var self = this;
    $('.ralphbox').each(function(){
      $(this).removeClass("ralph");
      $(this).removeClass("ralph-wrecking");
      if($(this).attr("data-column") == self.ralph.column){

        $(this).addClass("ralph-wrecking");
      }
    });
  };




  this.printBuilding = function(){
    $('.building').empty();
    var buildingBody = "";
    for(i = 0; i < this.building.windows.length; i++){
      buildingBody += '<div class ="window" data-state="'+ this.building.windows[i].health +'" data-row="'+ this.building.windows[i].row +'" data-column ="'+ this.building.windows[i].column +'"></div>';
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

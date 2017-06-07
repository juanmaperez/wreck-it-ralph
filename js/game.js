function Game(options){
  this.points = 0;
  this.counter = 120;

  this.ralph = options.ralph;
  this.building = options.building;

  this.timeByMove = 1200;



  this.loadGame = function(){
    this.building.createBuilding();
    this.printBuilding();

    this.createRalphSpace();
  };





  this.update = function(totalByMove){
    this.printRalphWrecking();

    this.building.selectWindow(this.ralph.column);

    this.printBuilding();


    var self = this;
    setTimeout(function(){
      self.printRalph();
    },400);



  };


  this.createRalphSpace = function(){
    var ralphSpace = "";
    for(i = 0; i < 5; i++){
      ralphSpace += '<div class="ralphbox" data-column="' + i + '"></div>';
    }
    $('.ralphspace').prepend(ralphSpace);
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
    self.update(this.timeByMove);
  }.bind(this),this.timeByMove);

}

var options = {
  ralph: new Ralph(),
  building: new Building(),
};

var game = new Game(options);
game.loadGame();

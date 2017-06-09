function Game(options){
  this.points = 0;
  this.counter = 120;

  this.ralph = options.ralph;
  this.building = options.building;
  this.fixer = options.fixer;

  this.timeByMove = 700;



  this.loadGame = function(){
    this.building.createBuilding();
    this.printBuilding();
    this.assignControlsToKeys();

    this.createRalphSpace();

  };



  this.updateBuilding = function(){
      this.printBuilding();
  };

  this.update = function(){

    this.printRalphWrecking();
    this.building.selectWindow(this.ralph.column).receiveDamage();

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



  this.printFixer = function(){
    $('.fixer').remove();
    //console.log(this.building.selectWindow(this.fixer.column, this.fixer.row));
    this.building.selectWindow(this.fixer.column, this.fixer.row).addFixer();
    $('div[data-fix="in"]').append('<div class="fixer nofixing"></div>');
  };

  this.assignControlsToKeys = function(){
    $('body').on('keydown', function(e) {
      switch (e.keyCode) {
        case 87: // arrow up
          this.fixer.goUp();
          this.printFixer();
          break;
        case 83: // arrow down
          this.fixer.goDown();
          this.printFixer();

          break;
        case 65: // arrow left
          this.fixer.goLeft();
          this.printFixer();

          break;
        case 68: // arrow right
          this.fixer.goRight();
          this.printFixer();

          break;
        case 70:
          this.building.selectWindow(this.fixer.column, this.fixer.row).receiveHealth();
          this.fixer.fixing();

         break;
      }
    }.bind(this));
  };



  this.printBuilding = function(){
    $('.building').empty();
    var buildingBody = "";
    for(i = 0; i < this.building.windows.length; i++){
      if(this.building.windows[i].row != this.fixer.row || this.building.windows[i].column != this.fixer.column){
        this.building.windows[i].removeFixer();
      }
      buildingBody += '<div class ="window" data-state="'+ this.building.windows[i].health +'" data-row="'+ this.building.windows[i].row +'" data-column="'+ this.building.windows[i].column +'" data-fix="'+ this.building.windows[i].isFixer +'"></div>';
    }
    $('.building').prepend(buildingBody);
    this.printFixer();

  };


  this.intervalBuilding = setInterval(function(){
    var self = this;
    self.updateBuilding();
  }.bind(this),60);

  this.intervalRalph = setInterval(function(){
    var self = this;
    self.update(this.timeByMove);
  }.bind(this),this.timeByMove);

}

var options = {
  ralph: new Ralph(),
  building: new Building(),
  fixer : new Fixer(),
};

var game = new Game(options);
game.loadGame();

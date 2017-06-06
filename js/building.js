function Building(){
  this.points = 0;
  this.windows = [];

  this.createBuilding = function(){
    for(i = 0; i < 4; i++){
        for(j = 0; j< 5; j++){
          var window = new Window (i,j);
          this.windows.push(window);
        }
      }
  };


  this.selectWindow = function(column){
    var random = Math.floor(Math.random()*4);
    for(i=0; i < this.windows.length; i++){
      if(this.windows[i].column == column && this.windows[i].row == random){
        this.windows[i].receiveDamage();

      }
    }
  };



}


// ================ Window Class ================ //

function Window(row, column){
  this.health = 2;
  this.row = row;
  this.column = column;

  this.receiveDamage = function(){
    if(this.health > 0){
      this.health--;
    }

  };

  this.receiveHealth = function(){
    if(this.health == 1){
      this.health++;
    }
  };

  this.testHealth = function(){
    switch(this.health){
      case 1:
        $('.window').attrRemove("data-state");
        $('.window').attr("data-state", "broken");
        break;

      case 0:
        $('.window').attrRemove("data-state");
        $('.window').attr("data-state", "over");
        break;
    }
  };

}

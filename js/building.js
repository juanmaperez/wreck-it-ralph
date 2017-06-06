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

  this.printBuilding = function(){
    var buildingBody = "";
    for(i = 0; i < this.windows.length; i++){
      buildingBody += '<div class ="window" data-state="new" data-row="'+ this.windows[i].row +'" data-column ="'+ this.windows[i].column +'"></div>';
    }
    $('.building').prepend(buildingBody);
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

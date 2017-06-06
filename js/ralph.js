function Ralph(){
  this.column = 3;

  this.createRalphSpace = function(){
    var ralphSpace = "";
    for(i = 0; i < 5; i++){
      ralphSpace += '<div class="ralphbox" data-column="' + i + '"></div>';
    }
    $('.ralphspace').prepend(ralphSpace);
  };



  this.moveRalph = function(){
    var random = Math.floor(Math.random()*2);
      if(random && this.column > 0){
        this.column--;
      } else if(!random && this.column < 4){
        this.column++;
      }else{
        this.moveRalph();
      }
  };




}

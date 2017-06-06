function Ralph(){
  this.row = 3;

  this.createRalphSpace = function(){
    var ralphSpace = "";
    for(i = 0; i < 5; i++){
      ralphSpace += '<div class="ralphbox" data-column="' + i + '"></div>';
    }
    $('.ralphspace').prepend(ralphSpace);
  };



  this.moveRalph = function(){
    var random = Math.floor(Math.random()*2);
      if(random && this.row > 0){
        this.row--;
        this.wreck();
      } else if(!random && this.row < 4){
        this.row++;
        this.wreck();
      }else{
        this.moveRalph();
      }
  };




}

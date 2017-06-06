function Ralph(){
  this.row = 3;

  this.createRalphSpace = function(){
    var ralphSpace = "";
    for(i = 0; i < 5; i++){
      ralphSpace += '<div class="ralphbox" data-column="' + i + '"></div>';
    }
    $('.ralphspace').prepend(ralphSpace);
  };

  this.printRalph = function(){
    var self = this;
    $('.ralphbox').each(function(){
      $(this).removeClass("ralph");
      if($(this).attr("data-column") == self.row){
        $(this).addClass("ralph");
      }
    });
  };

  this.moveRalph = function(){
    var random = Math.floor(Math.random()*2);
      if(random && this.row > 0){
        this.row--;
      } else if(!random && this.row < 4){
        this.row++;
      }else{
        this.moveRalph();
      }

      this.printRalph();

  };


}

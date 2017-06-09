function Fixer(){
  this.row = Math.floor(Math.random()*5);
  this.column = Math.floor(Math.random()*5);

  this.goUp = function(){
    if(this.row > 0){ this.row--;}
  };

  this.goDown = function(){
    if(this.row < 3){ this.row++;}
  };

  this.goLeft = function(){
    if(this.column > 0){ this.column--;}
  };

  this.goRight = function(){
    if(this.column < 4){ this.column++;}
  };


  this.fixing = function(){
    console.log("hola");
      $('.fixer').toggleClass("nofixing");
      $('.fixer').toggleClass("fixing");
  };


}

(function(exports){
    function Player() {
      this._canvas = document.getElementById("myCanvas");
      this._ctx = this._canvas.getContext("2d");
      this._x = this._canvas.width/2;
      this._y = this._canvas.height - 50;

      this._squareWidth = 50;
      this._rightPressed = false;
      this._leftPressed = false;
      this._upPressed = false;
      this._downPressed = false;
    }

      Player.prototype.drawSquare = function() {
        this._ctx.beginPath();
        this._ctx.rect(this._x,this._y,this._squareWidth,this._squareWidth);
        this._ctx.fillStyle = "red";
        this._ctx.fill();
        this._ctx.closePath();
      }

      Player.prototype.draw = function(myPlayer) {
        console.log("HI")
        myPlayer._ctx.clearRect(0,0,myPlayer._canvas.width, myPlayer._canvas.height);
        myPlayer.drawSquare();

        if(myPlayer._rightPressed && x < myPlayer._canvas.width) {
          x += 5;
        }
        else if(myPlayer._leftPressed && x > 0) {
          x -= 5;
        }
        else if(myPlayer._downPressed && x < myPlayer._canvas.width) {
          y += 5;
        }
        else if(myPlayer._upPressed && x > 0) {
          y -= 5;
        }
      }

  exports.Player = Player;
})(this);

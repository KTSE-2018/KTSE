// (function(exports){
    function Player() {
      this._canvas = document.getElementById("myCanvas");
      this._ctx = this._canvas.getContext("2d");
      this._x = this._canvas.width/2;
      this._y = this._canvas.height - 50;
      this._acc = 50;
      
      this._sprite = new Image();
      this._sprite.src = '../img/heroine.png';
      this._sprite_x = 288;
      this._sprite_y = 0;
      this._spriteWidth = 32;
      this._spriteHeight = 45;

      this._currentFrame = 0;
      this._frameCount = 3; 

      this._squareWidth = 50;
      this._rightPressed = false;
      this._leftPressed = false;
      this._upPressed = false;
      this._downPressed = false;
    }

      Player.prototype.drawSquare = function() {
        // before?
        this._ctx.beginPath();
        // or after? find out on next week's episode
        if (this._downPressed) {
          this._sprite_y = 0;
        } else if (this._leftPressed) {
          this._sprite_y = 45;
        } else if (this._rightPressed) {
          this._sprite_y = 90;
        } else if (this._upPressed) {
          this._sprite_y = 135;
        }
        this._ctx.drawImage(this._sprite, this._sprite_x, this._sprite_y, this._spriteWidth, this._spriteHeight, this._x, this._y, 35, 50);
        this._ctx.closePath();
      }

      Player.prototype.updateSquare = function() {
        this._currentFrame = ++this._currentFrame % this._frameCount;
        this._sprite_x = this._currentFrame * this._spriteWidth;
      }

      Player.prototype.draw = function(myPlayer) {
        myPlayer._ctx.clearRect(0,0,myPlayer._canvas.width, myPlayer._canvas.height);     
        myPlayer.updateSquare();
        myPlayer.drawSquare();

        if(myPlayer._rightPressed) {
          if (myPlayer._x + myPlayer._acc > myPlayer._canvas.width - myPlayer._squareWidth) {
          myPlayer._x = (myPlayer._canvas.width - myPlayer._squareWidth)
        } else {
          myPlayer._x += myPlayer._acc;
        }
        }
        else if(myPlayer._leftPressed) {
          if (myPlayer._x - myPlayer._acc < 0) {
          myPlayer._x = 0;
        } else {
          myPlayer._x -= myPlayer._acc;
        }
        }
        else if(myPlayer._downPressed) {
          if (myPlayer._y + myPlayer._acc > myPlayer._canvas.height - myPlayer._squareWidth) {
          myPlayer._y = (myPlayer._canvas.height - myPlayer._squareWidth)
        } else {
          myPlayer._y += myPlayer._acc;
        }
        }
        else if(myPlayer._upPressed) {
          if (myPlayer._y - myPlayer._acc < 0) {
          myPlayer._y = 0;
        } else {
          myPlayer._y -= myPlayer._acc;
        }
        };
      };

      module.exports = Player
  // exports.Player = Player;
// })(this);

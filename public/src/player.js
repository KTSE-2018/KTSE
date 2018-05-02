// (function(exports){
    function Player() {
      this._canvas = document.getElementById("myCanvas");
      this._ctx = this._canvas.getContext("2d");
      this._x = this._canvas.width/2;
      this._y = this._canvas.height - 50;
      this._acc = 5;
      collisionBox1 = new CollisionBox(30, 30, 100, 100);


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
        myPlayer._ctx.clearRect(0,0,myPlayer._canvas.width, myPlayer._canvas.height);
        myPlayer.drawSquare();
        collisionBox1.drawCollisionBox();
        // We need a game class that calls draw and draws all the objects.
        // Currently if we have multiple set Interval loops the game flickers
        // This is because they occasionally overwrite themselves.
        // Also it's better SRP, player class shouldn't be drawing itself.
        // It's also inefficient to be drawing lots of things to the screen lots of times.

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

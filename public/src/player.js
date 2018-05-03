function Player() {
  this._canvas = document.getElementById("myCanvas");
  this._ctx = this._canvas.getContext("2d");
  this._x = (this._canvas.width - this._width) / 2;
  this._y = this._canvas.height - 50;
  this._width = 50;
  this._height = 50;
  this._acc = 5;
  this._collisionable = []
 
  this._rightPressed = false;
  this._leftPressed = false;
  this._upPressed = false;
  this._downPressed = false;
}

Player.prototype.drawSquare = function() {
  this._ctx.beginPath();
  this._ctx.rect(this._x, this._y, this._width, this._height);
  this._ctx.fillStyle = "red";
  this._ctx.fill();
  this._ctx.closePath();
}

Player.prototype.reposition = function(myPlayer) {
  myPlayer._ctx.clearRect(0, 0, myPlayer._canvas.width, myPlayer._canvas.height);
  myPlayer.drawSquare();


  if (myPlayer._rightPressed) {
    if (myPlayer._x + myPlayer._acc > myPlayer._canvas.width - myPlayer._width) {
      myPlayer._x = (myPlayer._canvas.width - myPlayer._width)
    } else {
      // if (collisionOnR(player, this._collisionable[0]) === true) {} else {
        myPlayer._x += myPlayer._acc;
      // }
    }
  } else if (myPlayer._leftPressed) {
    if (myPlayer._x - myPlayer._acc < 0) {
      myPlayer._x = 0;
    } else {
      // if (collisionOnL(player, this._collisionable[0]) === true) {} else {
        myPlayer._x -= myPlayer._acc;
      // }
    }
  } else if (myPlayer._downPressed) {
    if (myPlayer._y + myPlayer._acc > myPlayer._canvas.height - myPlayer._width) {
      myPlayer._y = (myPlayer._canvas.height - myPlayer._width)
    } else {
      // if (collisionOnD(player, this._collisionable[0]) === true) {} else {
        myPlayer._y += myPlayer._acc;
      // }
    }
  } else if (myPlayer._upPressed) {
    if (myPlayer._y - myPlayer._acc < 0) {
      myPlayer._y = 0;
    } else {
      // if (collisionOnU(player, this._collisionable[0]) === true) {} else {
        myPlayer._y -= myPlayer._acc;
      // }

    }
  };
};
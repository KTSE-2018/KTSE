function Player() {
  this._canvas = document.getElementById("myCanvas");
  this._ctx = this._canvas.getContext("2d");

  this._sprite = new Image();
  this._sprite.src = '../img/heroine.png';
  this._sprite_x = 288;
  this._sprite_y = 0;
  this._spriteWidth = 32;
  this._spriteHeight = 45;
  this._currentFrame = 0;
  this._frameCount = 3;

  this._x = (this._canvas.width - this._spriteWidth) / 2;
  this._y = this._canvas.height - this._spriteHeight;
  this._moveDelta = 50;
  this._collisionable = [];

  this._rightPressed = false;
  this._leftPressed = false;
  this._upPressed = false;
  this._downPressed = false;
}

Player.prototype.drawSprite = function() {
  // console.log("DrawSprite", this._sprite)
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
  this._ctx.drawImage(this._sprite, this._sprite_x, this._sprite_y, this._spriteWidth, this._spriteHeight, this._x, this._y, this._spriteWidth, this._spriteHeight);
  this._ctx.closePath();
}

Player.prototype.updateSprite = function() {
  // console.log("updateSprite")
  this._currentFrame = ++this._currentFrame % this._frameCount;
  this._sprite_x = this._currentFrame * this._spriteWidth;
}

Player.prototype.reposition = function(myPlayer) {
  // console.log("reposition")
  myPlayer._ctx.clearRect(0, 0, myPlayer._canvas.width, myPlayer._canvas.height);
  myPlayer.updateSprite();
  myPlayer.drawSprite();

  if (myPlayer._rightPressed) {
    if (myPlayer._x + myPlayer._moveDelta > myPlayer._canvas.width - myPlayer._spriteWidth) {
      myPlayer._x = (myPlayer._canvas.width - myPlayer._spriteWidth)
    } else {
      if (collisionOnR(player, player._collisionable, player._moveDelta) === true) {

      } else {
        myPlayer._x += myPlayer._moveDelta;
      }
    }
  } else if (myPlayer._leftPressed) {
    if (myPlayer._x - myPlayer._moveDelta < 0) {
      myPlayer._x = 0;
    } else {
      if (collisionOnL(player, player._collisionable, player._moveDelta) === true) {

      } else {
        myPlayer._x -= myPlayer._moveDelta;
      }
    }
  } else if (myPlayer._downPressed) {
    if (myPlayer._y + myPlayer._moveDelta > myPlayer._canvas.height - myPlayer._spriteHeight) {
      myPlayer._y = (myPlayer._canvas.height - myPlayer._spriteHeight)
    } else {
      if (collisionOnD(player, player._collisionable, player._moveDelta) === true) {

      } else {
        myPlayer._y += myPlayer._moveDelta;
      }
    }
  } else if (myPlayer._upPressed) {
    if (myPlayer._y - myPlayer._moveDelta < 0) {
      myPlayer._y = 0;
    } else {
      if (collisionOnU(player, player._collisionable, player._moveDelta) === true) {

      } else {
        myPlayer._y -= myPlayer._moveDelta;
      }
    }
  };
};

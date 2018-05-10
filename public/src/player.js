function Player(game) {
  this._canvas = document.getElementById("myCanvas");
  this._ctx = this._canvas.getContext("2d");
  this.game = game


  this._sprite = new Image();
  this._sprite.src = '../img/heroine.png';
  this._sprite_x = 288;
  this._sprite_y = 0;
  this._spriteWidth = 32;
  this._spriteHeight = 45;
  this._currentFrame = 0;
  this._frameCount = 3;

  this._x = (this._canvas.width - this._spriteWidth) / 2;
  this._y = (this._canvas.height - this._spriteHeight) / 2;
  this._moveDelta = 10;
  this._collisionable = [];

  this._rightPressed = false;
  this._leftPressed = false;
  this._upPressed = false;
  this._downPressed = false;
};

Player.prototype.drawSprite = function() {
  this._ctx.beginPath();
  if (this._downPressed) {
    this._sprite_y = 0;
  } else if (this._leftPressed) {
    this._sprite_y = 45;
  } else if (this._rightPressed) {
    this._sprite_y = 90;
  } else if (this._upPressed) {
    this._sprite_y = 135;
  };
  this._ctx.drawImage(this._sprite, this._sprite_x, this._sprite_y, this._spriteWidth,
    this._spriteHeight, this._x, this._y, this._spriteWidth, this._spriteHeight);
  this._ctx.closePath();
};

Player.prototype.updateSprite = function() {
  this._currentFrame = ++this._currentFrame % this._frameCount;
  this._sprite_x = this._currentFrame * this._spriteWidth;
};

Player.prototype.reposition = function(myPlayer) {
  myPlayer._ctx.clearRect(0, 0, myPlayer._canvas.width, myPlayer._canvas.height);
  myPlayer.updateSprite();
  myPlayer.drawSprite();

  if (myPlayer._rightPressed) {
    var object = collisionLogic.collision(myPlayer, myPlayer._collisionable, myPlayer._moveDelta, 'R');
    myPlayer._x = move.moveRD(myPlayer, object, "R", "x");
  } else if (myPlayer._downPressed) {
    var object = collisionLogic.collision(myPlayer, myPlayer._collisionable, myPlayer._moveDelta, 'D');
    myPlayer._y = move.moveRD(myPlayer, object, "D", "y");
  } else if (myPlayer._upPressed) {
    var object = collisionLogic.collision(myPlayer, myPlayer._collisionable, myPlayer._moveDelta, 'U');
    myPlayer._y = move.moveLU(myPlayer, object, "U", "y");
  } else if (myPlayer._leftPressed) {
    var object = collisionLogic.collision(myPlayer, myPlayer._collisionable, myPlayer._moveDelta, 'L');
    myPlayer._x = move.moveLU(myPlayer, object, "L", "x");
  };
};

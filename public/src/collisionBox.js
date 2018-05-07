(function(exports) {
  function CollisionBox(x, y, width, height, id, colour = "rgba(255, 255, 255, 0)") {
    this._canvas = document.getElementById("myCanvas");
    this._ctx = this._canvas.getContext("2d");
    this._x = x;
    this._y = y;
    this._id = id;
    this._colour = colour;
    this._spriteWidth = width;
    this._spriteHeight = height;
  }

  CollisionBox.prototype.drawCollisionBox = function() {
    this._ctx.beginPath();
    this._ctx.rect(this._x, this._y, this._spriteWidth, this._spriteHeight);
    this._ctx.fillStyle = this._colour;
    this._ctx.fill();
    this._ctx.closePath();
  }

  CollisionBox.prototype.reposition = function(collisionBox) {
    this.drawCollisionBox();
  }

  CollisionBox.prototype.getScript = function() {
    return "ME NO SPEAKY"
  }


  exports.CollisionBox = CollisionBox;
})(this);

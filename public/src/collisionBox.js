(function(exports) {
function CollisionBox(x, y, width, height, id, colour = "rgba(255, 255, 255, 0)") {
    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
    this._x = x;
    this._y = y;
    this._id = id;
    this._colour = colour;
    this._spriteWidth = width;
    this._spriteHeight = height;

    CollisionBox.prototype.drawCollisionBox = function(){
      this.ctx.beginPath();
      this.ctx.rect(this._x, this._y, this._spriteWidth, this._spriteHeight);
      this.ctx.fillStyle = this._colour;
      this.ctx.fill();
      this.ctx.closePath();
    }

    CollisionBox.prototype.reposition = function(collisionBox){
      this.drawCollisionBox();
    }

    CollisionBox.prototype.getScript = function(){

      return "ME NO SPEAKY"
    }

  }
  exports.CollisionBox = CollisionBox;
})(this);

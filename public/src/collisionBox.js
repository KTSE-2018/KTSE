function CollisionBox(x, y, width, height) {
    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;

    CollisionBox.prototype.drawCollisionBox = function(){
      this.ctx.beginPath();
      this.ctx.rect(this._x, this._y, this._width, this._height);
      this.ctx.fillStyle = "blue";
      this.ctx.fill();
      this.ctx.closePath();
    }

    CollisionBox.prototype.reposition = function(collisionBox){
      this.drawCollisionBox();
    }
  }

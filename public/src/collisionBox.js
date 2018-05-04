function CollisionBox(x, y, width, height, id) {
    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
    this._x = x;
    this._y = y;
    this._id = id;
    this._spriteWidth = width;
    this._spriteHeight = height;

    CollisionBox.prototype.drawCollisionBox = function(){
      this.ctx.beginPath();
      this.ctx.rect(this._x, this._y, this._spriteWidth, this._spriteHeight);
      this.ctx.fillStyle = "blue";
      this.ctx.fill();
      this.ctx.closePath();
    }

    CollisionBox.prototype.reposition = function(collisionBox){
      this.drawCollisionBox();
    }
  }

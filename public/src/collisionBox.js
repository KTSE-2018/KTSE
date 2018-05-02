function CollisionBox(x, y, width, height) {
    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    CollisionBox.prototype.drawCollisionBox = function(){
      this.ctx.beginPath();
      this.ctx.rect(this.x, this.y, this.width, this.height);
      this.ctx.fillStyle = "blue";
      this.ctx.fill();
      this.ctx.closePath();
    }

    CollisionBox.prototype.draw = function(){
      this.drawCollisionBox();
    }
  }

module.exports = Box

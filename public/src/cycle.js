(function(exports) {

  function Cycle(){
    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.shade = 0;
    this.count = 1;
  }

  Cycle.prototype.drawCollisionBox = function() {
    this.ctx.beginPath();
    this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = `rgba(0, 0, 0, ${this.shade})`;
    this.ctx.fill();
    this.ctx.closePath();
  }

  Cycle.prototype.reposition = function() {
    this.drawCollisionBox();
  }

  Cycle.prototype.shadingNight = function() {
    this.shade = 1
  }

  Cycle.prototype.shadingDay = function() {
    this.shade = 0
  }

  exports.Cycle = Cycle;
})(this);

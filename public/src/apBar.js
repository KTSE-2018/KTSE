function ApBar() {
  this.canvas = document.getElementById("myCanvas");
  this.ctx = this.canvas.getContext("2d");
  this.apBar = new Path2D()

}

ApBar.prototype.drawApBar = function() {

  this.ctx.beginPath();

  this.ctx.fillStyle = 'red';
  this.ctx.fillRect(5, 5, 100, 20);

};

ApBar.prototype.reposition = function(ApBar) {
  this.drawApBar();
}

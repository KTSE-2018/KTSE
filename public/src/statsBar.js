(function(exports) {
  function StatsBar(x, y, width, height, colour = "rgba(255, 255, 255, 1)", game, type) {
    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.game = game;
    this._x = x;
    this._y = y;
    this.type = type
    this._colour = colour;
    this._spriteWidth = width;
    this._spriteHeight = height;
    this._colour = colour;
  }

  StatsBar.prototype.drawStatBar = function() {
    //Fixed bar formatting
    this.ctx.beginPath();
    this.ctx.rect(this._x, this._y, this._spriteWidth/2, this._spriteHeight);
    this.ctx.fillStyle = "rgba(249, 231, 159, 0.5)";
    this.ctx.rect(this._x, this._y, this._spriteWidth, this._spriteHeight);
    this.ctx.fillStyle = "rgba(249, 231, 159, 0.5)";
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.rect(this._x, this._y, this.calculateRemaining(), this._spriteHeight);
    this.ctx.fillStyle = this._colour;

    this.ctx.fill();
    this.ctx.strokeStyle= '#5B2C6F'
    this.ctx.strokeRect(this._x, this._y, this._spriteWidth/2, this._spriteHeight);
    this.ctx.strokeRect(this._x, this._y, this._spriteWidth, this._spriteHeight);

    this.ctx.fillStyle = '#5B2C6F';
    this.ctx.font = '15px Arial';
    this.ctx.fillText(this.type.toString(), this._x + 2, this._y + 16)
    this.ctx.fillText("Overdrive", this._x + (this._spriteWidth/2) + 2, this._y + 16)
    this.ctx.closePath();
  }

  StatsBar.prototype.calculateRemaining = function() {
    if (this.type === 'AP') {
      return this.game.actionPoints._points
    } else if (this.type === 'EL') {
      return this.game.energyLevel._points
    } else if (this.type === 'PS') {
      return this.game.projectScore._score * 10
    }
  }

  StatsBar.prototype.reposition = function() {
    this.drawStatBar();
  }

  exports.StatsBar = StatsBar;
})(this);

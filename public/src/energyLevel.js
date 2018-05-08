function EnergyLevel(game) {
  this._points = 100
}

EnergyLevel.prototype.increaseEnergy = function(x = 10) {
  this._points += x
};

EnergyLevel.prototype.decreaseEnergy = function(x = 10) {
  if (x > this._points) {
    console.error('insufficient Energy');
  } else {
    this._points -= x
    if (this._points === 0 ) {
      game.gameOver()
    }
  }
};

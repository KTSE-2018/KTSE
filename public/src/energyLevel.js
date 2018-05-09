function EnergyLevel(game) {
  this._points = 100;
}

EnergyLevel.prototype.increaseEnergy = function(x = 30) {
  this._points += x;
};

EnergyLevel.prototype.decreaseEnergy = function(x = 35) {
  this._points -= x;
  if (this._points <= 0) {
    game.gameOver("e");
  }
};

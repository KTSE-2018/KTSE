function EnergyLevel(game) {
  this._points = 100;
}

EnergyLevel.prototype.increaseEnergy = function(x = 30) {
  this._points += x;
};

EnergyLevel.prototype.decreaseEnergy = function(x = 35) {
  if (this._points > 35) {
    this._points -= x;
  } else {
    this._points = 0;
  }

  if (this._points <= 0 && game.cycle.count !== 5) {
    game.gameOver("e");
  }
};

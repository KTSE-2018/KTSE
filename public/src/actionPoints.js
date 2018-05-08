function ActionPoints(game) {
  this._MAX_POINTS = 10;
  this._points = this._MAX_POINTS;
  this._meditated = false;
}

ActionPoints.prototype.consumeAP = function(x = 1) {
  const err = Error('Insufficient AP');

  if (x > this._points) {
    console.error('Insufficient AP');
    return;
  } else {
    this._points -= x
    if (this._points === 0 ) {
      game.turnOver()
      game.decreaseEnergy()
      this.resetAP(2);
    }
  }
};

ActionPoints.prototype.meditate = function() {
  this._meditated = true;
  game.increaseEnergy();
};

ActionPoints.prototype.resetAP = function(bonus = 1) {
  if (this._meditated === true) {
    this._points = this._MAX_POINTS + bonus;
    console.log("BONUS: for meditating, you have gained an AP bonus for this cycle")
  } else {
    this._points = this._MAX_POINTS;
  }
  this._meditated = false;
};

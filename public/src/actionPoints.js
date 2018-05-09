function ActionPoints(game) {
  this._MAX_POINTS = 100;
  this._points = this._MAX_POINTS;
  this._meditated = false;
}

ActionPoints.prototype.consumeAP = function(x = 1) {
  if (x > this._points) {
    console.error('Insufficient AP');
    return;
  } else {
    this._points -= x
    if (this._points <= 0 ) {
      game.turnOver()
      game.decreaseEnergy()
      this.resetAP(15);
    }
  }
}

ActionPoints.prototype.meditate = function() {
  this._meditated = true;
  game.increaseEnergy();
};

ActionPoints.prototype.resetAP = function(bonus = 1) {
  if (this._meditated === true) {
    this._points = this._MAX_POINTS + bonus;
    console.log("BONUS: For meditating, you have recovered some EL and gained an AP bonus for the next cycle")
  } else {
    this._points = this._MAX_POINTS;
  }
  this._meditated = false;
};

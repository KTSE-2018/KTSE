function ActionPoints(game) {
  this._MAX_POINTS = 10;
  this._points = this._MAX_POINTS;
  this._meditated = false;
}

ActionPoints.prototype.consumeAP = function(x = 1) {
  const err = Error('Insufficient AP');

  if (x > this._points) {
    console.error('Insufficient AP');
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
  console.log("Called AP.meditate: ", this._meditatedg)
};

ActionPoints.prototype.resetAP = function(bonus = 1) {
  console.log("Called AP.reset")
  if (this._meditated === true) {
    this._points = this._MAX_POINTS + bonus;
  } else {
    this._points = this._MAX_POINTS;
  }
  console.log("AP.meditate --> AP = ", this._points)
  this._meditated = false;
  console.log("AP.meditate --> meditate = ", this._meditated)
};

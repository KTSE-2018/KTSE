function EnergyLevel() {
  this.points = 100
}

EnergyLevel.prototype.increaseEnergy = function(x = 10) {
  this.points += x
};

EnergyLevel.prototype.decreaseEnergy = function(x = 10) {
  if (x > this.points) {
    console.error('insufficient Energy');
  } else {
    this.points -= x
  }

  EnergyLevel.prototype.apLimiter = function() {
    if (this.points < 50) {
      actionPoints.limiter = true
    }
  };
};

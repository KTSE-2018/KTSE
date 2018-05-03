function EnergyLevel() {
  this.points = 100
}

EnergyLevel.prototype.increaseEnergy = function(x = 10) {
  this.points += x
};

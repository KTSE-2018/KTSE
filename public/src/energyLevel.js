function EnergyLevel(game) {
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
    if (this.points === 0 ) {
      game.gameOver('e')
    }
  }
};

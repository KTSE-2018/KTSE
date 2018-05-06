function ActionPoints(game) {
  this.points = 10
}

ActionPoints.prototype.consumeAP = function(x = 1) {
  const err = Error('Insufficient AP');

  if (x > this.points) {
    console.error('Insufficient AP');
  } else {
    this.points -= x
    if (this.points === 0 ) {
      game.turnOver()
      game.decreaseEnergy()
      this.points = 10
    }
  }
};

ActionPoints.prototype.increaseAP = function(x = 1) {
  this.points += x

};

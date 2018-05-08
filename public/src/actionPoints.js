function ActionPoints(game) {
  this.points = 100
}

ActionPoints.prototype.consumeAP = function(x = 1) {
  const err = Error('Insufficient AP');

  if (x > this.points) {
    console.error('Insufficient AP');
    return null
  } else {
    this.points -= x
  }
  if (this.points === 0 ) {
    game.turnOver()
    game.decreaseEnergy()
    this.points = 100
    }
  }


ActionPoints.prototype.increaseAP = function(x = 1) {
  this.points += x

};

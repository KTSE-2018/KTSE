function ActionPoints() {
  this.points = 10
}

ActionPoints.prototype.consumeAP = function(x = 1) {
  const err = Error('Insufficient AP');

  if (x > this.points) {
    console.error('Insufficient AP');
  } else {
    this.points -= x
  }
};

ActionPoints.prototype.increaseAP = function(x = 1) {
  this.points += x

};

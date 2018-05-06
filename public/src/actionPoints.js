function ActionPoints() {
  this.points = 10
  this.limiter = false
}

ActionPoints.prototype.consumeAP = function(x = 1) {

  if (x > this.points) {
    console.error('Insufficient AP');
  } else if  {
    if (this.limiter) {
      if (Math.floor(Math.random() * Math.floor(2) > 0) {
        x = 2
        this.points -= x
      }
    } else {
      this.points -= x

    }
  }
};

ActionPoints.prototype.increaseAP = function(x = 1) {
  this.points += x

};

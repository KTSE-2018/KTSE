function ActionPoints() {
  this.points = 10
}

ActionPoints.prototype.consumeAP = function(x = 1) {
  this.points -= x
};

module.exports = ActionPoints

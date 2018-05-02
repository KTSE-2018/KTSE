function ActionPoints() {
  this.points = 10
}

ActionPoints.prototype.consumeAP = function() {
  this.points -= 1
};

module.exports = ActionPoints

function ProjectScore() {
  this._score = 5
}

ProjectScore.prototype.increaseProjectScore = function(x = 1) {
  this._score += x
};

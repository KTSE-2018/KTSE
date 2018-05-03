function ProjectScore() {
  this.score = 0
}

ProjectScore.prototype.increaseProjectScore = function(x = 1) {
  this.score += x
};

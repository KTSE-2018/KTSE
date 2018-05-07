function ProjectScore() {
  this.score = 5
}

ProjectScore.prototype.increaseProjectScore = function(x = 1) {
  this.score += x
};

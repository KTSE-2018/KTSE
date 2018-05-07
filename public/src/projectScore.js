function ProjectScore() {
  this.score = 20
}

ProjectScore.prototype.increaseProjectScore = function(x = 20) {
  this.score += x
};

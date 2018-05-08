function ProjectScore(game) {
  this._score = 5;
  this._multiplierStatus = false;
  this._multiplier = 1;
};

ProjectScore.prototype.increaseProjectScore = function(x = 5) {
  this._score += (this._multiplier * x)
  if (this._multiplierStatus === true) {
    console.log("BONUS: For getting a cocach's help, your project quality has increased more than usual!")
  }
};

ProjectScore.prototype.scoreMultiplier = function(m) {
  this._multiplierStatus = true;
  this._multiplier = m
};

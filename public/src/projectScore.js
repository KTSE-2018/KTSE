function ProjectScore(game) {
  this._score = 0;
  this._multiplierStatus = false;
  this._multiplierCount = 1;
  this._multiplier = 1;
};

ProjectScore.prototype.increaseProjectScore = function(x = 1) {
  this._score += (this._multiplier * x)
  if (this._multiplierStatus === true) {
    console.log("BONUS: For getting a coach's help, your PQ has increased more than usual!")
  }
};

ProjectScore.prototype.scoreMultiplier = function(m) {
  this._multiplierStatus = true;
  this._multiplier = m;
};

ProjectScore.prototype.multiplierChecker = function() {
  if (this._multiplierCount > 0) {
    this._multiplierCount -= 1;
  } else {
    this._multiplierStatus = false;
    this._multiplierCount = 1;
    this._multiplier = 1;
  }
}

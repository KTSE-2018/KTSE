function Game(cycle) {
  this.collisions = []

  this.cycle = cycle
  this.actionPoints = new ActionPoints(this.game);
  this.energyLevel = new EnergyLevel(this.game);
  this.projectScore = new ProjectScore(this.game);


  Game.prototype.draw = function(objArray) {
    objArray.forEach(function(e) {
      e.reposition(e);
    });
  };

  Game.prototype.consumeAP = function() {
    this.actionPoints.consumeAP();
  }

  Game.prototype.meditate = function() {
    this.actionPoints.meditate();
  }

  Game.prototype.turnOver = function() {
    this.projectScore.scoreMultiplier(1, false);
    this.cycle.turnOver(this.projectScore._score);
  }

  Game.prototype.gameOver = function(type) {
    this.cycle.gameOver(type);
  }

  Game.prototype.decreaseEnergy = function() {
    this.energyLevel.decreaseEnergy();
  }

  Game.prototype.increaseEnergy = function() {
    this.energyLevel.increaseEnergy();
  }

};

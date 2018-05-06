function Game(actionPoints, energyLevel) {
  this.collisions = []
  this.actionPoints = actionPoints;
  this.energyLevel = energyLevel;

  Game.prototype.draw = function(objArray) {
    objArray.forEach(function(e) {
      e.reposition(e);
    });
  };
};

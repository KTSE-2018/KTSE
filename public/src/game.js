function Game() {
  this.collisions = []

  Game.prototype.draw = function(objArray) {
    objArray.forEach(function(e) {
      e.reposition(e);
    });
  };
};

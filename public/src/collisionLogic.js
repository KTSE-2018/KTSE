(function(exports) {
  function CollisionLogic() {
  }

  CollisionLogic.prototype.collision = function(player, collisionObjects, stepSize, direction) {
    var bool, obj;

    collisionObjects.some(function(e) {
      if (
        ((player._y - (direction === 'U' ? stepSize : 0) >= (e._y + e._spriteHeight)) ||
          ((player._y + player._spriteHeight + (direction === 'D' ? stepSize : 0)) <= e._y) ||
          ((player._x + player._spriteWidth + (direction === 'R' ? stepSize : 0)) <= e._x) ||
          (player._x - (direction === 'L' ? stepSize : 0) >= (e._x + e._spriteWidth))) === false) {
        bool = true;
        obj = e;
        return bool, obj
      }
    })

    return {
      'collide': bool,
      'object': obj
    }
  }

  CollisionLogic.prototype.interact = function(message) {
    console.log(message)
  };

  exports.CollisionLogic = CollisionLogic;

})(this);

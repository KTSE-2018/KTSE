// (function(exports) {
//   collisionLogic = function(player, collisionObjects, stepSize, direction) {
//     var bool
//     var obj
//
//     collisionObjects.some(function(e) {
//       if (
//         ((player._y - (direction === 'U' ? stepSize : 0) >= (e._y + e._spriteHeight)) ||
//           ((player._y + player._spriteHeight + (direction === 'D' ? stepSize : 0)) <= e._y) ||
//           ((player._x + player._spriteWidth + (direction === 'R' ? stepSize : 0)) <= e._x) ||
//           (player._x - (direction === 'L' ? stepSize : 0) >= (e._x + e._spriteWidth))) === false) {
//         bool = true
//         obj = e
//         return bool, obj
//       }
//     })
//
//     return {
//       'collide': bool,
//       'object': obj
//     }
//   }
//
//   exports.collisionLogic = collisionLogic;
// })(this)

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
          bool = true
          obj = e
          return bool, obj
        }
      })

      return {
        'collide': bool,
        'object': obj
      }
    }

    CollisionLogic.prototype.interact = function() {
      console.log("MESSAGE")
    };

  exports.CollisionLogic = CollisionLogic;

})(this);

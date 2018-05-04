
(function(exports) {
  function CollisionLogic2(player, collisionObjects, stepSize, direction) {
  }

    CollisionLogic2.prototype.objectCollision = function() {
      var bool
      var obj

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

    CollisionLogic2.prototype.wallCollision = function() {
      switch(direction) {
        case 'U':

          break;

        case 'D':

          break;

        case 'R':
          if (myPlayer._x + myPlayer._moveDelta > myPlayer._canvas.width - myPlayer._spriteWidth) {
            return myPlayer._canvas.width - myPlayer._spriteWidth;
          } else {
            return false;
          }
          break;

        case 'L':

          break;
      }

    }


    exports.CollisionLogic2 = collisionLogic;
})(this)
// Player.prototype.calculateGap = function(ctx_xy, canvas_wh, sprite_wh, direction) {
//   var collisionObj = collisionLogic(myPlayer, myPlayer._collisionable, myPlayer._moveDelta, direction)
//   return (collisionObj['object']._y + collisionObj['object']._spriteHeight) if collisionObj['collide'] === true)
//
// if (direction === 'R' || direction === 'D') {
//   return (ctx_xy + myPlayer._moveDelta) if ctx_xy + myPlayer._moveDelta > canvas_wh - sprite_wh;
//   return canvas_wh - sprite_wh;
// } else {
//   return (ctx_xy - myPlayer._moveDelta) if ctx_xy - myPlayer._moveDelta < 0;
//   return 0;
// }
// }

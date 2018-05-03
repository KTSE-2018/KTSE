(function(exports) {
    collisionOnR = function(a, b, c) {
      var x
      b.some(function(e) {
          if (
            ((a._y > (e._y + e._spriteHeight)) ||
            ((a._y + a._spriteHeight) < e._y) ||
            ((a._x + a._spriteWidth + c) < e._x) ||
            (a._x > (e._x + e._spriteWidth))) === false) {
          x = true
        }
      })
    return x
  }
  exports.collisionOnR = collisionOnR;
})(this)

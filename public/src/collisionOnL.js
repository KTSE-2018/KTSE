(function(exports) {
    collisionOnL = function(a, b, c) {
      var x
      b.some(function(e) {
          if (
            ((a._y > (e._y + e._spriteHeight)) ||
            ((a._y + a._spriteHeight) < e._y) ||
            ((a._x + a._spriteWidth) < e._x) ||
            (a._x - c > (e._x + e._spriteWidth))) === false) {
          x = true
        }
      })
    return x
  }
  exports.collisionOnL = collisionOnL;
})(this)

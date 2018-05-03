(function(exports) {
    collisionOnD = function(a, b, c) {
      var x
      b.some(function(e) {
          if (
            ((a._y > (e._y + e._spriteHeight)) ||
            ((a._y + a._spriteHeight + c) < e._y) ||
            ((a._x + a._spriteWidth) < e._x) ||
            (a._x > (e._x + e._spriteWidth))) === false) {
          x = true
        }
      })
    return x
  }
  exports.collisionOnD = collisionOnD;
})(this)

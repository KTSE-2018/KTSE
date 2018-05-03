(function(exports) {
    collisionOnD = function(a, b, c) {
      var x
      b.some(function(e) {
          if (
            ((a._y > (e._y + e._height)) ||
            ((a._y + a._height + c) < e._y) ||
            ((a._x + a._width) < e._x) ||
            (a._x > (e._x + e._width))) === false) {
          x = true
        }
      })
    return x
  }
  exports.collisionOnD = collisionOnD;
})(this)

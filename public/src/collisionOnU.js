(function(exports) {
  collisionOnU = function(a, b, c) {
    var x
    b.some(function(e) {
      if (
        ((a._y - c > (e._y + e._height)) ||
          ((a._y + a._height) < e._y) ||
          ((a._x + a._width) < e._x) ||
          (a._x > (e._x + e._width))) === false) {
        x = true
      }
    })
    return x
  }
  exports.collisionOnU = collisionOnU;
})(this)

// WORKS

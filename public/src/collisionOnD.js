(function(exports){
  collisionOnD = function(a, b) {
    return !(
      (a._y + a._height) < (b._y) ||
      ((a._x + a._width) < b._x) ||
      (a._x > (b._x + b._width))
    );
  }
	exports.collisionOnD = collisionOnD;
})(this)

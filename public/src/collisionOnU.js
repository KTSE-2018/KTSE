(function(exports){
  collisionOnU = function(a, b) {
    return !(
      (a._y > (b._y + b._height)) ||
      ((a._x + a._width) < b._x) ||
      (a._x > (b._x + b._width))
    );
  }
	exports.collisionOnU = collisionOnU;
})(this)

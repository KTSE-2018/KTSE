(function(exports){
  collisionOnR = function(a, b) {
    return !(
      (a._x > (b._x + b._width)) ||
      (a._y > (b._y + b._height)) ||
      (a._y + a._height) < (b._y)
    );
  }
	exports.collisionOnR = collisionOnR;
})(this)

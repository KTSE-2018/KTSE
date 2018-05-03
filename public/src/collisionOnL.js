(function(exports){
  collisionOnL = function(a, b) {
    return !(
      ((a._x + a._width) < b._x) ||
      (a._x > (b._x + b._width)) ||
      (a._y > (b._y + b._height)) ||
      (a._y + a._height) < (b._y) 

    );
  }
	exports.collisionOnL = collisionOnL;
})(this)

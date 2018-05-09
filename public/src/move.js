(function(exports) {
  function Move() {
  }
    Move.prototype.moveRD = function(myPlayer, collisionObject, rightUp, xy) {
      playerCoord = getCoord(myPlayer, xy);
      canvasDimension = getDimension(myPlayer, xy)['canvasDimension'];
      spriteDimension = getDimension(myPlayer, xy)['spriteDimension'];

      if (playerCoord + myPlayer._moveDelta > canvasDimension - spriteDimension) {
        return canvasDimension - spriteDimension;
      } else if (collisionObject['collide'] === true) {
        dialogueBoxProject.show(collisionObject['object'])
        return (getCoord(collisionObject['object'], xy) - spriteDimension);
      } else {
        game.consumeAP()
        return playerCoord + myPlayer._moveDelta;
      };
    };

    Move.prototype.moveLU = function(myPlayer, collisionObject, leftDown, xy) {
      playerCoord = getCoord(myPlayer, xy);

      if (playerCoord - myPlayer._moveDelta < 0) {
        return 0;
      } else if (collisionObject['collide'] === true) {
        dialogueBoxProject.show(collisionObject['object'])
        return (getCoord(collisionObject['object'], xy) + getDimension(collisionObject['object'], xy)['spriteDimension'])
      } else {
        game.consumeAP()
        return playerCoord - myPlayer._moveDelta;
      };
    };

    getCoord = function(object, xy) {
      if (xy === "x") {
        return object._x;
      } else if (xy === "y") {
        return object._y;
      }
    }

    getDimension = function(object, xy) {
      if (xy === "x") {
        return dimHash = {
          'canvasDimension': object._canvas.width,
          'spriteDimension': object._spriteWidth
        }
      } else if (xy === "y") {
        return dimHash = {
          'canvasDimension': object._canvas.height,
          'spriteDimension': object._spriteHeight
        }
      }
    }
  exports.Move = Move
})(this);

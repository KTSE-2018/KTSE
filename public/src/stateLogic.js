run this function within the render loop
so that the game is constantly checking the sprite position
relative to all immovable limits

function CheckState(player) {
  var px, py, pw, ph, cx, cy, cw, xh

  px = player._x
  py = player._y
  pw = player._spriteWidth
  ph = player._spriteHeight

  //[x,y,w,h]
  player._collisionable.forEach(function(element) {
    
  })



  calculate x and y diffs of sprite relative to all known limits
  var diffL, diffR, diffU, diffD
  calculate these based on player x, y, moveDelta, collisionable attributes

  return {movableL, movableR, movableU, movableD}

  this array gets fed to player or a move class which can use these in a
  guard clause to determine if the player can move.
  If the player can, then do the below:

  // This happens elesewhere
  if the player will move into a full-free space,
    move into that space --> moveRight()
  else if the player will overlap with an object,
    move to collide with the object --> collideRight()
  else if the player is already collided with an object
    do not allow to move
  end




}


if (myPlayer._rightPressed) {
  if (myPlayer._x + myPlayer._moveDelta > myPlayer._canvas.width - myPlayer._spriteWidth) {
    myPlayer._x = (myPlayer._canvas.width - myPlayer._spriteWidth)
  } else {
    if (collisionOnR(myPlayer, myPlayer._collisionable, myPlayer._moveDelta) === true) {

    } else {
      myPlayer._x += myPlayer._moveDelta;
    }
  }

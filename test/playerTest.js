// const expect = require('chai').expect;
// const Player = require('../public/src/player.js');
console.log(Player);

describe('Player movement', function() {
  var player
  var test_x
  var test_y
  var test_acc

  beforeEach(function(){
    player = new Player();
    player._y = 500; //Move off bottom of canvas
    test_x = player._x;
    test_y = player._y;
    test_acc = player._acc;
  })

  it('should be able to move right', function(){
    // Arrange
    player._rightPressed = true;
    var expected_x = test_x + test_acc
    // Action
    player.draw(player);
    // Assert
    chai.expect(player._x).to.equal(expected_x);
  });

  it('should not be able to move past the right wall', function(){
    // Arrange
    for (i=0; i<500; i++ ){
    player._rightPressed = true;
    // Action
    player.draw(player);
    }
    var expected_x = player._canvas.width - player._squareWidth;

    // Assert
    chai.expect(player._x).to.equal(expected_x);
  });

  it('should be able to move left', function(){
    // Arrange
    player._leftPressed = true;
    var expected_x = test_x - test_acc
    // Action
    player.draw(player);
    // Assert
    chai.expect(player._x).to.equal(expected_x);
  });

  it('should be able to move up', function(){
    // Arrange
    player._upPressed = true;
    var expected_y = test_y - test_acc
    // Action
    player.draw(player);
    // Assert
    chai.expect(player._y).to.equal(expected_y);
  });

  it('should be able to move down', function(){
    // Arrange
    player._downPressed = true;
    var expected_y = test_y + test_acc
    // Action
    player.draw(player);
    // Assert
    chai.expect(player._y).to.equal(expected_y);
  });

  it('should not be a blank canvas', function() {
    // Arrange
    var blank = document.createElement('canvas');
    blank.width = player._canvas.width
    blank.height = player._canvas.height
    // Action
    // Assert
    chai.expect(player._canvas.toDataURL()).to.not.eql(blank.toDataURL());
  });


});

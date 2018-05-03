describe('Player movement', function() {
  var player, test_x, test_y, test_moveDelta

  beforeEach(function() {
    player = new Player();
    player._y = 500; //Move off bottom of canvas
    test_x = player._x;
    test_y = player._y;
    test_moveDelta = player._moveDelta;
  })

  it('should be able to move right', function() {
    // Arrange
    player._rightPressed = true;
    var expected_x = test_x + test_moveDelta
    // Action
    player.reposition(player);
    // Assert
    chai.expect(player._x).to.equal(expected_x);
  });

  it('should not be able to move past the right wall', function() {
    // Arrange
    player._rightPressed = true;
    // Action
    for (i = 0; i < 100; i++) {
      player.reposition(player);
    }
    var expected_x = player._canvas.width - player._spriteWidth;
    // Assert
    chai.expect(player._x).to.equal(expected_x);
  });

  it('should be able to move left', function() {
    // Arrange
    player._leftPressed = true;
    var expected_x = test_x - test_moveDelta
    // Action
    player.reposition(player);
    // Assert
    chai.expect(player._x).to.equal(expected_x);
  });


  it('should not be able to move past the left wall', function() {
    // Arrange
    player._leftPressed = true;
    // Action
    for (i = 0; i < 100; i++) {
      player.reposition(player);
    }
    var expected_x = 0;
    // Assert
    chai.expect(player._x).to.equal(expected_x);
  });

  it('should be able to move up', function() {
    // Arrange
    player._upPressed = true;
    var expected_y = test_y - test_moveDelta
    // Action
    player.reposition(player);
    // Assert
    chai.expect(player._y).to.equal(expected_y);
  });

  it('should not be able to move past the upper wall', function() {
    // Arrange
    player._upPressed = true;
    // Action
    for (i = 0; i < 100; i++) {
      player.reposition(player);
    }
    var expected_y = 0;
    // Assert
    chai.expect(player._y).to.equal(expected_y);
  });

  it('should be able to move down', function() {
    // Arrange
    player._downPressed = true;
    var expected_y = test_y + test_moveDelta
    // Action
    player.reposition(player);
    // Assert
    chai.expect(player._y).to.equal(expected_y);
  });

  it('should not be able to move past the bottom wall', function() {
    // Arrange
    player._downPressed = true;
    // Action
    for (i = 0; i < 100; i++) {
      player.reposition(player);
    }
    var expected_y = player._canvas.height - player._spriteHeight;
    // Assert
    chai.expect(player._y).to.equal(expected_y);
  });

});

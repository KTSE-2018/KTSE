describe('Player movement', function() {
  var player, test_x, test_y, test_moveDelta
  var expect = chai.expect;

  beforeEach(function() {
    player = new Player();
    collisionLogic = new CollisionLogic();
    game = new Game();
    move = new Move();
    player._y = 500; //Move off bottom of canvas
    test_x = player._x;
    test_y = player._y;
    test_moveDelta = player._moveDelta;

    collisionStub = sinon.stub(collisionLogic, "collision")
    collisionStub.returns({'collide':false})
    gameStub = sinon.stub(game, "consumeAP");
    moveRDStub = sinon.stub(move, "moveRD");
    moveLUStub = sinon.stub(move, "moveLU");
  })

  it('should be able to move right', function() {
    // Arrange
    player._rightPressed = true;
    expected_x = test_x + test_moveDelta
    moveRDStub.returns(expected_x)
    // Action
    player.reposition(player);
    // Assert
    expect(player._x).to.equal(expected_x);
  });

  it('should not be able to move past the right wall', function() {
    // Arrange
    player._rightPressed = true;
    expected_x = player._canvas.width - player._spriteWidth;
    moveRDStub.returns(expected_x)
    // Action
    for (i = 0; i < 100; i++) {
      player.reposition(player);
    }
    // Assert
    expect(player._x).to.equal(expected_x);
  });

  it('should be able to move left', function() {
    // Arrange
    player._leftPressed = true;
    expected_x = test_x - test_moveDelta
    moveLUStub.returns(expected_x)
    // Action
    player.reposition(player);
    // Assert
    expect(player._x).to.equal(expected_x);
  });


  it('should not be able to move past the left wall', function() {
    // Arrange
    player._leftPressed = true;
    expected_x = 0;
    moveLUStub.returns(expected_x)
    // Action
    for (i = 0; i < 100; i++) {
      player.reposition(player);
    }
    // Assert
    expect(player._x).to.equal(expected_x);
  });

  it('should be able to move up', function() {
    // Arrange
    player._upPressed = true;
    expected_y = test_y - test_moveDelta
    moveLUStub.returns(expected_y)
    // Action
    player.reposition(player);
    // Assert
    expect(player._y).to.equal(expected_y);
  });

  it('should not be able to move past the upper wall', function() {
    // Arrange
    player._upPressed = true;
    expected_y = 0;
    moveLUStub.returns(expected_y)
    // Action
    for (i = 0; i < 100; i++) {
      player.reposition(player);
    }
    // Assert
    expect(player._y).to.equal(expected_y);
  });

  it('should be able to move down', function() {
    // Arrange
    player._downPressed = true;
    expected_y = test_y + test_moveDelta
    moveRDStub.returns(expected_y)
    // Action
    player.reposition(player);
    // Assert
    expect(player._y).to.equal(expected_y);
  });

  it('should not be able to move past the bottom wall', function() {
    // Arrange
    player._downPressed = true;
    expected_y = player._canvas.height - player._spriteHeight;
    moveRDStub.returns(expected_y)
    // Action
    for (i = 0; i < 100; i++) {
      player.reposition(player);
    }
    // Assert
    expect(player._y).to.equal(expected_y);
  });

});

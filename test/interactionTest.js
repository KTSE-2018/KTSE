describe('Player Interaction', function() {
  var player, collide_object, message_box

  beforeEach(function() {
    player = new Player();
    collisionLogic = new CollisionLogic
    consoleSpy = sinon.spy(console, 'log');
    collisionStub = sinon.stub(collisionLogic, "collision")
    collision_box = {
      'id': 'npc'
    };
    collision_return = {
      'collide': true,
      'object': collision_box
    }
    collisionStub.returns(collision_return)
  })

  it('should allow a player to interact with an object on collision', function() {
    // Arrange
    player._rightPressed = true;
    // Action
    player.reposition(player);
    // Assert
    consoleSpy.returned("MESSAGE")

  })
})

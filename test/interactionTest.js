describe('Player Interaction', function() {
  var player, collide_object, message_box
  var expect = chai.expect;

  beforeEach(function() {
    player = new Player();
    player._y = 500;

    collisionLogic = new CollisionLogic()
    sinon.spy(console, 'log');
    collisionStub = sinon.stub(collisionLogic, "collision")
    collision_box = {
      '_id': 'box'
    };
    box_return = {
      'collide': true,
      'object': collision_box
    }

    collision_npc = {
      '_id': 'npc'
    };
    npc_return = {
      'collide': true,
      'object': collision_npc
    }
  })

  afterEach(function() {
    (console.log).restore();
  })

  it('should not allow a player to interact with an object on right-collision', function() {
    // Arrange
    player._rightPressed = true;
    collisionStub.returns(box_return)
    // Action
    player.reposition(player);
    // Assert
    expect((console.log).calledWith("ME NO SPEAKY")).to.be.true
    // console.log(consoleSpy);
    // expect(consoleSpy).to.equal("ME NO SPEAKY")
    //assert(consoleSpy.calledWith("BLAH")
  })

  it('should not allow a player to interact with an object on left-collision', function() {
    // Arrange
    player._leftPressed = true;
    collisionStub.returns(box_return)
    // Action
    player.reposition(player);
    // Assert
    expect((console.log).calledWith("ME NO SPEAKY")).to.be.true
  })

  it('should not allow a player to interact with an object on up-collision', function() {
    // Arrange
    player._upPressed = true;
    collisionStub.returns(box_return)
    // Action
    player.reposition(player);
    // Assert
    expect((console.log).calledWith("ME NO SPEAKY")).to.be.true
  })

  it('should not allow a player to interact with an object on down-collision', function() {
    // Arrange
    player._downPressed = true;
    collisionStub.returns(box_return)
    // Action
    player.reposition(player);
    // Assert
    expect((console.log).calledWith("ME NO SPEAKY")).to.be.true
  })


  it('should allow a player to interact with an NPC on right-collision', function() {
    // Arrange
    player._rightPressed = true;
    collisionStub.returns(npc_return)
    // Action
    player.reposition(player);
    // Assert
    expect((console.log).calledWith("TAKE A BREAK!")).to.be.true
  })

  it('should allow a player to interact with an NPC on left-collision', function() {
    // Arrange
    player._leftPressed = true;
    collisionStub.returns(npc_return)
    // Action
    player.reposition(player);
    // Assert
    expect((console.log).calledWith("TAKE A BREAK!")).to.be.true
  })

  it('should allow a player to interact with an NPC on up-collision', function() {
    // Arrange
    player._upPressed = true;
    collisionStub.returns(npc_return)
    // Action
    player.reposition(player);
    // Assert
    expect((console.log).calledWith("TAKE A BREAK!")).to.be.true
  })

  it('should allow a player to interact with an NPC on down-collision', function() {
    // Arrange
    player._downPressed = true;
    collisionStub.returns(npc_return)
    // Action
    player.reposition(player);
    // Assert
    expect((console.log).calledWith("TAKE A BREAK!")).to.be.true
  })

})

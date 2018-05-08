describe('Player Interaction', function() {
  var expect = chai.expect;

  beforeEach(function() {
    player = new Player();
    player._y = 500;
    collisionLogic = new CollisionLogic();
    dialogueBoxProject = new DialogueBox();
    collisionStub = sinon.stub(collisionLogic, "collision");
    dialogueStub = sinon.stub(dialogueBoxProject, "show")
    collision_npc = {'_id': 'npc', '_script': [{m: 'Hello'}]};
    npc_return = {'collide': true, 'object': collision_npc};
    collisionStub.returns(npc_return);
    dialogueStub.returns(collision_npc._script)
  });

  describe('with an NPC', function(){
    it('should allow a player to interact with an NPC on right-collision', function() {
      // Arrange
      player._rightPressed = true;
      // Action
      player.reposition(player);
      // Assert
      expect(dialogueStub.calledOnce).to.be.true
    });

    it('should allow a player to interact with an NPC on left-collision', function() {
      // Arrange
      player._leftPressed = true;
      // Action
      player.reposition(player);
      // Assert
      expect(dialogueStub.calledOnce).to.be.true
    });

    it('should allow a player to interact with an NPC on up-collision', function() {
      // Arrange
      player._upPressed = true;
      // Action
      player.reposition(player);
      // Assert
      expect(dialogueStub.calledOnce).to.be.true
    });

    it('should allow a player to interact with an NPC on down-collision', function() {
      // Arrange
      player._downPressed = true;
      // Action
      player.reposition(player);
      // Assert
      expect(dialogueStub.calledOnce).to.be.true
    });
  });

})

describe('Interaction with NPC', function() {
  var expect = chai.expect;

  beforeEach(function() {
    move = new Move();
    collisionLogic = new CollisionLogic();
    dialogueBoxProject = new DialogueBox();
    playerDbl = {'_x': 50, '_y': 50, '_canvas': {'width': 500}, '_canvas': {'height': 500}, '_spriteWidth': 50, '_spriteHeight': 50}
    collisionStub = sinon.stub(collisionLogic, "collision");
    dialogueStub = sinon.stub(dialogueBoxProject, "show");

    collision_npc = {'_x': 100, '_y': 100, '_id': 'npc', '_script': [{m: 'Hello'}]};
    npc_return = {'collide': true, 'object': collision_npc};
    collisionStub.returns(npc_return);
    dialogueStub.returns(collision_npc._script)
  });

  describe('with an NPC', function(){
    it('should allow a player to interact with an NPC on right-collision', function() {
      // Arrange
      // Action
      move.moveRD(playerDbl, npc_return, "x")
      // Assert
      expect(dialogueStub.calledOnce).to.be.true
    });

    it('should allow a player to interact with an NPC on left-collision', function() {
      // Arrange
      // Action
      move.moveRD(playerDbl, npc_return, "x")
      // Assert
      expect(dialogueStub.calledOnce).to.be.true
    });

    it('should allow a player to interact with an NPC on up-collision', function() {
      // Arrange
      // Action
      move.moveRD(playerDbl, npc_return, "y")
      // Assert
      expect(dialogueStub.calledOnce).to.be.true
    });

    it('should allow a player to interact with an NPC on down-collision', function() {
      // Arrange
      // Action
      move.moveRD(playerDbl, npc_return, "y")
      // Assert
      expect(dialogueStub.calledOnce).to.be.true
    });
  });

})

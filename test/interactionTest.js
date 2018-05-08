describe('Player Interaction', function() {
  var player, collide_object, message_box
  var expect = chai.expect;

  beforeEach(function() {
    player = new Player();
    player._y = 500;
    game = new Game()
    collisionLogic = new CollisionLogic();
    dialogueBoxProject = new DialogueBox();
    collisionStub = sinon.stub(collisionLogic, "collision");
    dialogueSpy = sinon.spy(dialogueBoxProject, "show")

    collision_npc = {
      '_id': 'npc'
    };

    npc_return = {
      'collide': true,
      'object': collision_npc
    };

  });

  afterEach(function() {
    dialogueSpy.restore();
  });


  describe('with an NPC', function(){
    it('should allow a player to interact with an NPC on right-collision', function() {
      // Arrange
      player._rightPressed = true;
      script_stub = sinon.stub(script)
      game_stub = sinon.stub(game)
      sprite_lana = { src: '../img/npc_f.png', x: 320, y: 0, w: 32, h: 45 }
      npc = new Npc('lana', 500, 50, 32, 45, script_stub, game_stub, sprite_lana);

      collisionStub.returns(npc);
      npcStub = sinon.stub(npc, 'getScript');
      // scriptReturn = npcStub.returns([{m: "Do you want to meditate?"}]);
      // dialogueStub.returns(scriptReturn)
      // Action
      player.reposition(player);
      // Assert
      
    });

    it('should allow a player to interact with an NPC on left-collision', function() {
      // Arrange
      player._leftPressed = true;
      collisionStub.returns(npc_return)
      interactStub.returns([{m: "Do you want to meditate?"}]);
      // Action
      player.reposition(player);
      // Assert
expect((console.log).calledWith([{m: "Do you want to meditate?"}])).to.be.true
    });

    it('should allow a player to interact with an NPC on up-collision', function() {
      // Arrange
      player._upPressed = true;
      collisionStub.returns(npc_return)
      interactStub.returns([{m: "Do you want to meditate?"}]);
      // Action
      player.reposition(player);
      // Assert
expect((console.log).calledWith([{m: "Do you want to meditate?"}])).to.be.true
    });

    it('should allow a player to interact with an NPC on down-collision', function() {
      // Arrange
      player._downPressed = true;
      collisionStub.returns(npc_return)
      interactStub.returns([{m: "Do you want to meditate?"}]);
      // Action
      player.reposition(player);
      // Assert
expect((console.log).calledWith([{m: "Do you want to meditate?"}])).to.be.true
    });
  });

})

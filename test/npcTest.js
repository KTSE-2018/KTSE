describe('Npc', function() {
  var npc, script
  var expect = chai.expect;

  beforeEach(function() {
    script = new Script();
    game = new Game();
    sprite_lana = {
      src: '../img/npc_f.png',
      x: 320,
      y: 0,
      w: 32,
      h: 45
    }
    npc_lana = new Npc('lana', 500, 50, 50, 50, script, game, sprite_lana);
    scriptStub = sinon.stub(script, "container");
    scriptStub.returns([{
      m: "Do you want to meditate?"
    }]);
  });

  it("returns the NPC's script", function() {
    // Arrange
    // Action
    npc_script = npc_lana.getScript();
    // Assert
    expect(npc_script).to.eql([{
      m: "Do you want to meditate?"
    }]);

    it("provides an AP bonus on next cycle after meditating", function() {
      
    })

    it("provides a PS-multiplier bonus on next cycle after getting help", function() {

    })
  })
})

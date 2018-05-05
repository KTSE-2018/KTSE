describe('Npc', function(){
    var npc, script
    var expect = chai.expect;

    beforeEach(function() {
      script = new Script();
      npc = new Npc('dana', 10, 10, 50, 50, script);
      scriptStub = sinon.stub(script, "container");
      scriptStub.returns([{m: "Do you want to meditate?"}]);
    });

    it("gets the NPC's script based on their ID", function() {
      // Arrange
      // Action
      npc_script = npc.getScript('dana');
      // Assert
      expect(npc_script).to.eql([{m: "Do you want to meditate?"}]);
  })
})

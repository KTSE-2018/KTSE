describe('Npc', function(){
    beforeEach(function() {
      var npc = new Npc;
      var script = new Script;
      scriptStub = sinon.stub(script, "container")
      scriptStub.returns([{m: "Do you want to meditate?"}])
    });

    it("gets the NPC's script based on their ID", function() {
      // Arrange
      // Action
      npc_script = npc.getScript('dana')
      // Assert
      expect(npc_script).to.equal([{m: "Do you want to meditate?"}])
  })
})

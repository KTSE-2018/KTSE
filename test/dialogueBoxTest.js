describe('DialogueBox', function() {

  describe('#reposition', function() {

    var expect = chai.expect
    var dialogueBox = new DialogueBox()

    it('dialogue box should only persist whilst it is in use', function() {
      var drawSpy = sinon.spy(dialogueBox, "drawDialogueBox");
      dialogueBox._inUse = true;
      dialogueBox.reposition()
      expect(drawSpy.callCount).to.eq(1)
    });
  })
})

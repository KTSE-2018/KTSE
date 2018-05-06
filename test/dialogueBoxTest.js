describe('DialogueBox', function() {

  describe('#reposition', function() {

    var expect = chai.expect
    var dialogueBox = new DialogueBox()

    it('persist while _inuse is true', function() {
      var drawSpy = sinon.spy(dialogueBox, "drawDialogueBox");
      dialogueBox._inUse = true;
      dialogueBox.reposition()
      expect(drawSpy.callCount).to.eq(1)
      drawSpy.restore();
    });

    it('does not persist whilst _inuse is false', function() {
      var drawSpy = sinon.spy(dialogueBox, "drawDialogueBox");
      dialogueBox._inUse = false;
      dialogueBox.reposition()
      expect(drawSpy.callCount).to.eq(0)
      drawSpy.restore();
    });
  })

  describe('#dialogueStep', function() {
    it('returns the dialogue that matches the count', function() {
      dialogueBox._count += 1
      expect(dialogueBox.dialogueStep()).to.eq("MORE engaging dialogue")
      })
    })
})

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

    var expect = chai.expect
    var dialogueBox = new DialogueBox()

    it('returns the dialogue that matches the count', function() {
      dialogueBox._count += 1
      expect(dialogueBox.dialogueStep()).to.eq("MORE engaging dialogue")
    })
  })

  describe('#finalDialogue', function() {

    var expect = chai.expect
    var dialogueBox = new DialogueBox()

    it('returns true if it is the last step in the dialogue', function() {
      dialogueBox._count = 1
      expect(dialogueBox.finalDialogue()).to.eq(true)
    })

    it('returns false if it is the last step in the dialogue', function() {
      dialogueBox._count = 0
      expect(dialogueBox.finalDialogue()).to.eq(false)
    })
  })

  describe('#show', function() {

    var expect = chai.expect
    var dialogueBox = new DialogueBox()

    it('calls getScript from npc, sets inUse to true', function() {
      var npc = {
        getScript: function() { [{'m': 'Engaging dialogue'}, {'m': 'MORE engaging dialogue'}] }
      }
      var mock = sinon.mock(npc);
      mock.expects("getScript").once();
      dialogueBox._inUse = false;
      dialogueBox.show(npc)
      expect(dialogueBox._inUse).to.eq(true)
    })
  })

  describe('#hide', function() {

    var expect = chai.expect
    var dialogueBox = new DialogueBox()

    it('sets inUse to false and count to 0', function() {
      dialogueBox._count = 10
      dialogueBox._inUse = true
      dialogueBox.hide()
      expect(dialogueBox._count).to.eq(0)
      expect(dialogueBox._inUser).to.eq(false)

    })





  })
})

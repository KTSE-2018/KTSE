describe('DialogueBox', function() {
  var expect = chai.expect;
  var dialogueBox, drawSpy, repoStub;

  beforeEach(function(){
    dialogueBox = new DialogueBox();
    dialogueBox._dialogue = [{m: 'Hello'}, {m: 'How are you?'}]
  })

  describe('#reposition', function() {
    it('persist while _inuse is true', function() {
      dialogueBox._npc = {'constructor': {'name': 'Npc'}, '_id': 'fake_npc', validAction: function(){return true}};
      drawStub = sinon.stub(dialogueBox, "drawDialogueBox");
      drawStub.returns(0);
      dialogueBox._inUse = true;
      dialogueBox.reposition();
      expect(drawStub.callCount).to.eq(1);
    });

    it('does not persist whilst _inuse is false', function() {
      dialogueBox._npc = {'constructor': {'name': 'Npc'}, '_id': 'fake_npc', validAction: function(){return true}};
      drawStub = sinon.stub(dialogueBox, "drawDialogueBox");
      drawStub.returns(0);
      dialogueBox._inUse = false;
      dialogueBox.reposition();
      expect(drawStub.callCount).to.eq(0);
    });
  })

  describe('#dialogueStep', function() {
    it('returns the dialogue that matches the count', function() {
      dialogueBox._npc = {'constructor': {'name': 'Npc'}, '_id': 'fake_npc', validAction: function(){return false}};
      dialogueBox._count += 1
      expect(dialogueBox.dialogueStep()).to.eq("How are you?")
    })
  })

  describe('#finalDialogue', function() {
    it('returns true if it is the last step in the dialogue', function() {
      dialogueBox._count = 1
      expect(dialogueBox.finalDialogue()).to.eq(true)
    })

    it('returns false if it is the last step in the dialogue', function() {
      dialogueBox._count = 0
      console.log(dialogueBox._dialogue.length)
      expect(dialogueBox.finalDialogue()).to.eq(false)
    })
  })

  describe('#show', function() {
    it('calls getScript from npc, sets inUse to true', function() {
      dialogueBox._npc = {'constructor': {'name': 'Npc'}, getScript: function(){return 'hi'}}
      dialogueBox._inUse = false;
      dialogueBox.show(dialogueBox._npc)
      expect(dialogueBox._inUse).to.eq(true)
    })
  })

  describe('#hide', function() {
    it('sets inUse to false and count to 0', function() {
      dialogueBox._count = 10
      dialogueBox._inUse = true
      dialogueBox.hide()
      expect(dialogueBox._count).to.eq(0)
      expect(dialogueBox._inUse).to.eq(false)
    })
  })

  describe('#gameAction', function() {
    it('Calls the NPC object #action function', function() {
      dialogueBox._npc = {'constructor': {'name': 'Npc'}, action: function(){return 'Do something'}};
      result = dialogueBox._npc.action();
      expect(result).to.equal("Do something");
    })
  })
})

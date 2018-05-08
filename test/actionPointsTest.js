describe('ActionPoints', function() {
  var expect = chai.expect;

  beforeEach(function(){
    actionPoint = new ActionPoints();
    energyLevel = new EnergyLevel();
    game = new Game();
  })

  describe('._points', function() {
    it('should start with 10 points ', function() {
      expect(actionPoint._points).to.eq(10);
    });
  });

  describe('#consumeAP', function() {
    it('should consume 1 AP as default', function() {
      actionPoint.consumeAP()
      expect(actionPoint._points).to.eq(9);
    });

    it('can consume 2 or more AP if given params', function() {
      actionPoint.consumeAP(2)
      expect(actionPoint._points).to.eq(8);
    });

    it('cant consume more AP than you currently have', function() {
      const err = Error('Insufficient AP');
      actionPoint.consumeAP(11)
      expect(actionPoint._points).to.eq(10)
    });
  });

  describe('#meditate', function() {
    it("should change the player's meditated status to true", function(){
      actionPoint.meditate();
      expect(actionPoint._meditated === true);
    })

    it("should recover the player's energy level by x", function(){
      game_stub = sinon.stub(game, 'increaseEnergy')
      el_stub = sinon.stub(energyLevel)
      game_stub.callsFake(function increaseEnergyPoints() {
        el_stub._points = 110
      })
      actionPoint.meditate();
      expect(el_stub._points).to.eq(110);
    })
  })

  describe('#resetAP', function() {
    it('resets AP to 10 when player has not meditated', function() {
      actionPoint._meditated = false;
      actionPoint.resetAP()
      expect(actionPoint._points).to.eq(10)
    });

    it('resets AP by the bonus amount when player has meditated', function() {
      actionPoint._meditated = true;
      actionPoint.resetAP(2)
      expect(actionPoint._points).to.eq(12)
    });

    it("resets the player's meditated status to false", function() {
      actionPoint._meditated = true;
      actionPoint.resetAP()
      expect(actionPoint._meditated).to.eq(false)
    })
  });
});

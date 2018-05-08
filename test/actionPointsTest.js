describe('ActionPoints', function() {
  var expect = chai.expect

  beforeEach(function(){
    ap = new ActionPoints();
  })

  describe('._points', function() {
    it('should start with 10 points ', function() {
      expect(ap._points).to.eq(10);
    });
  });

  describe('#consumeAP', function() {
    it('should consume 1 AP as default', function() {
      ap.consumeAP()
      expect(ap._points).to.eq(9);
    });

    it('can consume 2 or more AP if given params', function() {
      ap.consumeAP(2)
      expect(ap._points).to.eq(8);
    });

    it('cant consume more AP than you currently have', function() {
      const err = Error('Insufficient AP');
      ap.consumeAP(11)
      expect(ap._points).to.eq(10)
    });
  });

  describe('#meditate', function() {
    it("should change the player's meditated status to true", function(){
      ap.meditate();
      expect(ap._meditated === true);
    })
  })

  describe('#resetAP', function() {
    it('resets AP to 10 when player has not meditated', function() {
      ap._meditated = false;
      ap.resetAP()
      expect(ap._points).to.eq(10)
    });

    it('resets AP by the bonus amount when player has meditated', function() {
      ap._meditated = true;
      ap.resetAP(2)
      expect(ap._points).to.eq(12)
    });

    it("resets the player's meditated status to false", function() {
      ap._meditated = true;
      ap.resetAP()
      expect(ap._meditated).to.eq(false)
    })
  });
});

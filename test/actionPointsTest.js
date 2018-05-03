describe('ActionPoints', function() {

  describe('#points', function() {
    it('should start with 10 points ', function() {
      ap = new ActionPoints();

      chai.expect(ap.points).to.eq(10);
    });
  });

  describe('.consumeAP', function() {
    it('should consume 1 AP as default', function() {
      ap = new ActionPoints();
      ap.consumeAP()
      chai.expect(ap.points).to.eq(9);
    });

    it('can consume 2 or more AP if given params', function() {
      ap = new ActionPoints();
      ap.consumeAP(2)
      chai.expect(ap.points).to.eq(8);
    });

    it('cant consume more AP than you currently have', function() {
      const err = Error('Insufficient AP');

      ap = new ActionPoints();
      ap.consumeAP(11)
      chai.expect(ap.points).to.eq(10)
    });
  });
});

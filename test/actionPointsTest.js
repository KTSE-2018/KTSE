describe('ActionPoints', function() {

  describe('#points', function() {
    it('should start with 10 points ', function() {
      ap = new ActionPoints();

      chai.expect(ap.points).to.eq(10);
    });
  });

  describe('.consumeAP', function() {
    it('should consume 1 AP', function() {
      ap = new ActionPoints();
      ap.consumeAP()
      chai.expect(ap.points).to.eq(9);
    });
  });
});

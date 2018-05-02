describe('ActionPoints', function() {

  describe('#points', function() {
    it('should start with 10 points ', function() {
      ap = new ActionPoints();

      chai.expect(ap.points).to.eq(10);
    });
  });
});

describe('ActionPoints', function() {
  beforeEach(function() {
    ap = new ActionPoints();
  })

  describe('#points', function() {
    it('should start with 10 points ', function() {
      expect(ap.points).to.eq(10);
    });
  });
});

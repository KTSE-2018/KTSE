describe('ProjectScore', function() {
  describe('#score', function() {
    it('initiates with an integer of 0', function() {
      ps = new ProjectScore
      chai.expect(ps.score).to.eq(0);
    });
  });
});

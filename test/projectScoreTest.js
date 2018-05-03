describe('ProjectScore', function() {
  describe('#score', function() {
    it('initiates with an integer of 0', function() {
      ps = new ProjectScore
      chai.expect(ps.score).to.eq(0);
    });
  });

  describe('.increaseProjectScore', function() {
    it('increases ProjectScore #score by 1', function() {

      ps = new ProjectScore
      ps.increaseProjectScore()
      chai.expect(ps.score).to.eq(1);
    });
  });
});

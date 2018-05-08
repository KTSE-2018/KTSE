describe('ProjectScore', function() {

  beforeEach(function() {
    projectScore = new ProjectScore;
  })

  describe('#score', function() {
    it('initiates with an integer of 5', function() {
      chai.expect(projectScore._score).to.eq(5);
    });
  });

  describe('.increaseProjectScore', function() {
    it('increases ProjectScore #score by 1', function() {
      projectScore.increaseProjectScore()
      chai.expect(projectScore._score).to.eq(6);
    });
  });
});

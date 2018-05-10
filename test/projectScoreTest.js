describe('ProjectScore', function() {
  var expect = chai.expect;

  beforeEach(function() {
    projectScore = new ProjectScore();
    cycle = new Cycle();
  });

  describe('#increaseProjectScore', function() {
    it('increases ProjectScore #score by 1', function() {
      projectScore.increaseProjectScore()
      expect(projectScore._score).to.eq(1);
    });
  });

  describe('#scoreMultiplier', function() {
    it('applies a project score multiplier', function() {
      projectScore.scoreMultiplier(2, true);
      projectScore.increaseProjectScore();
      projectScore.increaseProjectScore();
      expect(projectScore._score).to.eq(4)
    })
  })
});

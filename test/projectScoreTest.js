describe('ProjectScore', function() {
  var expect = chai.expect;

  beforeEach(function() {
    projectScore = new ProjectScore();
    cycle = new Cycle();
  });

  describe('._score', function() {
    it('initiates with an integer of 5', function() {
      expect.(projectScore._score).to.eq(5);
    });
  });

  describe('#increaseProjectScore', function() {
    it('increases ProjectScore #score by 1', function() {
      projectScore.increaseProjectScore()
      expect.(projectScore._score).to.eq(6);
    });
  });

  describe('#scoreMultiplier', function() {
    it('applies a project score multiplier', function() {
      projectScore.scoreMultiplier(2, 1);
      projectScore.increaseProjectScore(1);
      projectScore.increaseProjectScore(1);
      expect(projectScore._score).to.eq(9)
    })

    it('turns off after x cycles', function() {
      cycle_stub = sinon.stub(cycle, 'turnOver');
      projectScore.scoreMultiplier(2, 1);
      cycle_stub.returns(cycle.count);
      expect(projectScore._multipler).to.eq(false);
    })
  })
});

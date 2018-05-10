describe('EnergyLevel', function() {
  var expect = chai.expect;

  beforeEach(function(){
    // cycle = new Cycle();
    // cycleStub = sinon.stub(cycle)
    cycle = {count: 4}
    game = new Game(cycle);
    energyLevel = new EnergyLevel(game);
  })

  describe('#points', function() {
    it('initiates with 100 EnergyLevel Points', function() {
      expect(energyLevel._points).to.eq(100);
    });
  });

  describe('.increaseEnergy', function() {
    it('increases EnergyLevel points by 10 as default', function() {
      energyLevel.increaseEnergy()
      expect(energyLevel._points).to.eq(130);
    });
  });

  describe('decreaseEnergy', function() {
    it('decreases EnergyLevel points by 10 as default', function() {
      energyLevel.decreaseEnergy()
      expect(energyLevel._points).to.eq(65);
    });

    it('ends the game when energy is fully depleted', function() {
      gameOverStub = sinon.stub(game, "gameOver")
      energyLevel.decreaseEnergy(100)
      expect(gameOverStub.calledOnce).to.be.true;
    });
  });
});

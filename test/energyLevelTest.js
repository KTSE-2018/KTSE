describe('EnergyLevel', function() {
  var expect = chai.expect;

  beforeEach(function(){
    energyLevel = new EnergyLevel();
  })

  describe('#points', function() {
    it('initiates with 100 EnergyLevel Points', function() {
      expect(energyLevel._points).to.eq(100);
    });
  });

  describe('.increaseEnergy', function() {
    it('increases EnergyLevel points by 10 as default', function() {
      energyLevel.increaseEnergy()
      expect(energyLevel._points).to.eq(110);
    });
  });

  describe('decreaseEnergy', function() {
    it('decreases EnergyLevel points by 10 as default', function() {
      energyLevel.decreaseEnergy()
      expect(energyLevel._points).to.eq(90);
    });

    it('does not change energy level if insufficient energy available', function() {
      energyLevel.decreaseEnergy(101)
      expect(energyLevel._points).to.eq(100);
    });
  });
});

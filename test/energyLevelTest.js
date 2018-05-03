describe('EnergyLevel', function() {
  describe('#points', function() {
    it('initiates with 100 EnergyLevel Points', function() {
      el = new EnergyLevel()

      chai.expect(el.points).to.eq(100);
    });
  });

  describe('.increaseEnergy', function() {
    it('increases EnergyLevel points by 10 as default', function() {
      el = new EnergyLevel()
      el.increaseEnergy()
      chai.expect(el.points).to.eq(110);
    });
  });
});

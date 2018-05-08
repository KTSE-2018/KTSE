describe('EnergyLevel', function() {
  describe('#points', function() {
    it('initiates with 100 EnergyLevel Points', function() {
      el = new EnergyLevel()

      chai.expect(el._points).to.eq(100);
    });
  });

  describe('.increaseEnergy', function() {
    it('increases EnergyLevel points by 10 as default', function() {
      el = new EnergyLevel()
      el.increaseEnergy()
      chai.expect(el._points).to.eq(110);
    });
  });

  describe('decreaseEnergy', function() {
    it('decreases EnergyLevel points by 10 as default', function() {
      el = new EnergyLevel()
      el.decreaseEnergy()
      chai.expect(el._points).to.eq(90);
    });

    it('cant decrease by more than held energy', function() {
      el = new EnergyLevel()
      el.decreaseEnergy(101)
      chai.expect(el._points).to.eq(100);
    });
  });
});

describe('EnergyLevel', function() {
  describe('#points', function() {
    it('initiates with 100 EnergyLevel Points', function() {
      el = new EnergyLevel()

      chai.expect(el.points).to.eq(100);
    });
  });
});

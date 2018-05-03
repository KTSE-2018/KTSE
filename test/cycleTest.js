describe('Cycle', function() {
  describe('#count', function() {
    it('holds an array of numbers from 1-12', function() {
      cycle = new Cycle()

      chai.expect(cycle.cycles).to.deep.eq([
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12
      ]);
    });
  });

  it('loops through cycles when AP == 0', function() {});
});

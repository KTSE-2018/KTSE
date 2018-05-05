describe('Script', function(){
  var script = new Script();
  var expect = chai.expect;

  describe('#container', function(){
    it('returns a desired script', function(){
      test_script = script.container('coach')
      expect(test_script).to.eql([{m: "Hello there."}, {m: "Do you need help?"}]);
    });
  });
});

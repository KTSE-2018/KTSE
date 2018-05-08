describe('Script', function(){
  var script = new Script();
  var expect = chai.expect;

  describe('#container', function(){
    it('returns a desired script', function(){
      test_script = script.container('ned')
      expect(test_script).to.eql([{m: "Hello Ada. I am Ned, one of Codecraft's coaches, here to provide you with project support."},
            {m: "*** Ada asks a really intelligent question ***"},
            {m: "That's a great question... What do YOU think the answer should be?"},
            {m: "*** Ada stares back blankly ***"},
            {m: "Do you *really* need my help? [Y/N]"}],);
    });
  });
});

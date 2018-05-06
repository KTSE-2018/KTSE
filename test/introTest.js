var Browser = require ("zombie");

Browser.localhost("localhost", 8000);

describe('New Game button starts a new game', function(){

  var browser = new Browser();

  before(function(done) {
    browser.visit('/', done);
  });

  describe('New Game', function(){
    before(function(done){
      browser.pressButton('New Game');
      done();
    });
    it('lets you start a new game')
    browser.assert.text('#title', 'Gamedev Canvas Workshop');
  })
});

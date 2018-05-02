// const expect = require('chai').expect;
// const Player = require('../public/src/player.js');
console.log(Player);

describe('Player', function() {
  var player

  beforeEach(function(){
    player = new Player();
  })
  // DEFAULT: x = 368, y = 590
  it('should be able to move right', function(){
    // Arrange
    player._rightPressed = true;
    player.draw(player);
    // Assert
    chai.expect(player._x).to.equal(373);
  });
});

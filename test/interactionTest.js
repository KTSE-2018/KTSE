describe('Player can interact with other objects', function() {
  var player, collide_object, message_box

  beforeEach(function() {
    player = new Player();
    collide_object = {id: 'c_box'};
    collision_return = {'collide': true, 'object': collide_object}
  })

  it('should open a dialogue box on right-collision between player and object', function() {
    // Arrange
    // player._rightPressed = true;
    // player._x = 50;
    // player._moveDelta = 50;
    // player._spriteWidth = 50;
    
    // Action
    allow(player).to_receive(collisionOnR).and_return(collide_object)
    // Assert
    expect()

    // arrange
    collisionCalcutor = { detectCollisions: () => true }
    var player = new Player(collisionCalculator);

    // action
    player.moveRight();

    // assert
    expect()
  }



//Strategy pattern - objects take on elemnets of state and logic,
//Whats the current state? This is what can happen in this state.
//Encapsulte this in a class - "state machine"

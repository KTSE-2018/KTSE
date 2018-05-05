describe('CollisionBox', function() {
  var expect = chai.expect;

  beforeEach(function(){
    box = new CollisionBox(1,1,1,1,'box');
    boxSpy = sinon.spy(box, 'drawCollisionBox');
  })

  it('#reposition calls drawCollisionBox', function(){
    // Arrange
    // Action
    box.reposition();
    // Assert
    expect(boxSpy.calledOnce)
  })

  it('#getScript returns "ME NO SPEAKY"', function(){

  })
})

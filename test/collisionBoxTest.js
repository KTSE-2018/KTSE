describe('CollisionBox', function() {
  var expect = chai.expect;

  beforeEach(function(){
    box = new CollisionBox(1,1,1,1,'box');
  })


  it('#reposition calls drawCollisionBox', function(){
    // Arrange
    boxSpy = sinon.spy(box, 'drawCollisionBox');
    // Action
    box.reposition();
    // Assert
    expect(boxSpy.calledOnce)
    boxSpy.restore();
  })

  it('#getScript returns "ME NO SPEAKY"', function(){
    result = box.getScript();
    expect(result).to.equal("ME NO SPEAKY");
  })
})

describe('CollisionLogic', function() {
  var expect = chai.expect;
  var collisionLogic = new CollisionLogic();

  var object1, object2, object3, object4,
      player, stepSize, npc;

  describe('#collisions', function() {

    player = {
      _y: 200,
      _x: 200,
      _spriteWidth: 32,
      _spriteHeight: 45
    }
    object1 = {
      _y: 0,
      _x: 200,
      _spriteWidth: 100,
      _spriteHeight: 100
    }
    object2 = {
      _y: 400,
      _x: 200,
      _spriteWidth: 100,
      _spriteHeight: 100
    }
    object3 = {
      _y: 200,
      _x: 0,
      _spriteWidth: 100,
      _spriteHeight: 100
    }
    object4 = {
      _y: 200,
      _x: 400,
      _spriteWidth: 100,
      _spriteHeight: 100
    }
    stepSize = 500

    it('should return true if player attempts to move upwards into an object above it', function() {
      expect(collisionLogic.collision(player, [object1], stepSize, 'U')['collide']).to.eq(true);
    });
    it('should return true if player attempts to move downwards into an object below it', function() {
      expect((collisionLogic.collision(player, [object2], stepSize, 'D'))['collide']).to.eq(true);
    });
    it('should return true if player attempts to move left into an object to the left of it', function() {
      expect((collisionLogic.collision(player, [object3], stepSize, 'L'))['collide']).to.eq(true);
    });
    it('should return true if player attempts to move right into an object to the right of it', function() {
      expect((collisionLogic.collision(player, [object4], stepSize, 'R'))['collide']).to.eq(true);
    });
  });

  describe('#return values', function() {
    it('if a collision occurs then the object it collided with should be returned', function() {
      expect(collisionLogic.collision(player, [object1, object2, object3, object4], stepSize, 'R')['object']).to.eq(object4);
    });
    it('if a collision does not occur then nothing should be returned', function() {
      expect(collisionLogic.collision(player, [object1, object2, object3], stepSize, 'R')['object']).to.eq(undefined);
    });
  });

  describe('#interact', function(){
    it('fetch the right script', function(){
      npc = new Npc('dana',1,1,1,1);
      npcStub = sinon.stub(npc, 'getScript');
      npcStub.returns([{m: "Do you want to meditate?"}]);
      collisionLogic.interact('dana', npc);
      expect(collisionLogic._script).to.eql([{m: "Do you want to meditate?"}]);
    })
  })
});

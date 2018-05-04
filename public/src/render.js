$(document).ready(function() {
      $(function() {
        game = new Game();
        collisionLogic = new CollisionLogic();
        player = new Player();
        collisionBox1 = new CollisionBox(400, 400, 100, 100, 'red_box', 'red');
        collisionBox2 = new CollisionBox(200, 200, 100, 100, 'blue_box', 'blue');
        player._collisionable.push(collisionBox1, collisionBox2)
        setInterval(function(){ game.draw([player, collisionBox1, collisionBox2]) }, 100);
      });

      $(function() {
        $(this).keydown(function(e) {
            if (e.keyCode == 39) {
              player._rightPressed = true;
            } else if (e.keyCode == 37) {
              player._leftPressed = true;
            } else if (e.keyCode == 38) {
              player._upPressed = true;
            } else if (e.keyCode == 40) {
              player._downPressed = true;
            }
          });

          $(this).keyup(function(e) {
              if (e.keyCode == 39) {
                player._rightPressed = false;
              } else if (e.keyCode == 37) {
                player._leftPressed = false;
              } else if (e.keyCode == 38) {
                player._upPressed = false;
              } else if (e.keyCode == 40) {
                player._downPressed = false;
              }
            })

          });
      });

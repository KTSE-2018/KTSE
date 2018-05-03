$(document).ready(function() {
      $(function() {
        game = new Game();
        player = new Player();
        collisionBox1 = new CollisionBox(400, 400, 100, 100);
        collisionBox2 = new CollisionBox(200, 200, 100, 100);
        player._collisionable.push(collisionBox1, collisionBox2)
        setInterval(function(){ game.draw([player, collisionBox1, collisionBox2]) }, 20);
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

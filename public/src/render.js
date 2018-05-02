$(document).ready(function() {
      $(function() {
        player = new Player();
        dialogue = new Dialogue();
        // dialogue.draw();
        setInterval(function(){player.draw(player)}, 20);
        // setInterval(function(){collisionBox1.draw(collisionBox1)}, 20);

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

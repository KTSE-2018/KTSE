$(document).ready(function() {
      $(function() {
        // alert("HI");
        player = new Player();
        dialogue = new Dialogue();
        dialogue.draw();
      // });
      //
      // $(function() {
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
          setInterval(player.draw, 200000000000000000000000000000);
          });
      });

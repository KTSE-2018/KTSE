$(document).ready(function() {
  $(function() {
    game = new Game(new ActionPoints(), new EnergyLevel());
    script = new Script();
    npc = new Npc('dana',1,1,1,1, game);
    player = new Player();
    collisionLogic = new CollisionLogic();


    collisionBox1 = new CollisionBox(36, 90, 250, 80, 'box1');
    collisionBox2 = new CollisionBox(36, 280, 250, 80, 'box2');
    collisionBox3 = new CollisionBox(36, 470, 250, 80, 'box3');
    collisionBox4 = new CollisionBox(70, 640, 50, 50, 'box4');
    collisionBox5 = new CollisionBox(200, 640, 50, 50, 'box5');
    collisionBox6 = new CollisionBox(550, 670, 50, 50, 'box6');
    collisionBox7 = new CollisionBox(455, 670, 50, 50, 'box7');
    collisionBox8 = new CollisionBox(455, 450, 50, 110, 'box8');
    collisionBox9 = new CollisionBox(455, 160, 50, 175, 'box9');
    collisionBox10 = new CollisionBox(545, 50, 60, 40, 'npc1');
    collisionBox11 = new CollisionBox(355, 0, 60, 30, 'box11');
    collisionBox12 = new CollisionBox(353, 160, 62, 62, 'box12');
    collisionBox13 = new CollisionBox(353, 353, 62, 62, 'box13');
    collisionBox14 = new CollisionBox(353, 545, 62, 62, 'box14');
    collisionBox15 = new CollisionBox(353, 705, 60, 30, 'box15');
    collisionBox16 = new CollisionBox(577, 383, 60, 160, 'box16');

    dialogueBoxProject = new DialogueBox();

    actionPointsBar = new StatsBar(10, 15, 200, 20, 'red', game, 'A');
    energyPointsBar = new StatsBar(10, 45, 200, 20, 'yellow', game, 'E');

    player._collisionable.push(collisionBox1,
      collisionBox2, collisionBox3, collisionBox4, collisionBox5, collisionBox6,
      collisionBox7, collisionBox8, collisionBox9, collisionBox10, collisionBox11,
      collisionBox12, collisionBox13, collisionBox14, collisionBox15, collisionBox16)

      setInterval(function() {
            game.draw([player, collisionBox1, collisionBox2, collisionBox3,
              collisionBox4, collisionBox5, collisionBox6, collisionBox7,
              collisionBox8, collisionBox9, collisionBox10, collisionBox11,
              collisionBox12, collisionBox13, collisionBox14, collisionBox15, collisionBox16,
              dialogueBoxProject, actionPointsBar, energyPointsBar
            ])
          }, 100);
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

    $(this).keyup(function(e) {
    if (e.keyCode == 88) {
      dialogueBoxProject.hide();
    }
  })

  $(this).keyup(function(e) {
    if (e.keyCode == 32) {
      if (dialogueBoxProject.finalDialogue() === true) {
        dialogueBoxProject.gameAction();
        dialogueBoxProject.hide();
      }
      else {
        dialogueBoxProject._count += 1
      }
    }
  })

  });
});

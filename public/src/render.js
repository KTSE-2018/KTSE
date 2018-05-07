$(document).ready(function() {
  $(function() {
    cycle = new Cycle()
    game = new Game(cycle);

    player = new Player(game);
    collisionLogic = new CollisionLogic();


    $('#gotItButton').hide();
    $('#rules').hide();


    script = new Script();
    sprite_dana = {
      src: '../img/npc_f.png',
      x: 320,
      y: 0,
      w: 32,
      h: 45
    }
    npc_dana = new Npc('dana', 500, 50, 50, 50, script, game, sprite_dana);

    sprite_coach = {
      src: '../img/npc_m.png',
      x: 32,
      y: 225,
      w: 32,
      h: 45
    }
    npc_coach = new Npc('coach', 383, 440, 50, 50, script, game, sprite_coach);

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
    projectPointsBar = new StatsBar(10, 75, 200, 20, 'chartreuse', game, 'P');



    player._collisionable.push(npc_dana, npc_coach, collisionBox1,
      collisionBox2, collisionBox3, collisionBox4, collisionBox5, collisionBox6,
      collisionBox7, collisionBox8, collisionBox9, collisionBox10, collisionBox11,
      collisionBox12, collisionBox13, collisionBox14, collisionBox15, collisionBox16)

    setInterval(function() {
      game.draw([player, npc_dana, npc_coach, collisionBox1, collisionBox2, collisionBox3,
        collisionBox4, collisionBox5, collisionBox6, collisionBox7,
        collisionBox8, collisionBox9, collisionBox10, collisionBox11,
        collisionBox12, collisionBox13, collisionBox14, collisionBox15, collisionBox16,
        dialogueBoxProject, actionPointsBar, energyPointsBar, projectPointsBar, cycle
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
        if (cycle.gameEnd !== true) {
          cycle.turnStart();
        }
      }
    })

    $(this).keyup(function(e) {
      if (e.keyCode == 32) {
        if (dialogueBoxProject.finalDialogue() === true) {
          dialogueBoxProject.gameAction();
          dialogueBoxProject.hide();
        } else {
          dialogueBoxProject._count += 1
        }
      }
    })

  $('#playButton').click(function() {
        $('#myCanvas').animate({
        'marginLeft' : "+=300px" //moves right
        });
        $('#playButton').hide();
        $('#gotItButton').show();
        $('#rules').show();
    });

    $('#gotItButton').click(function() {
          $('#myCanvas').animate({
          'marginLeft' : "-=300px" //moves left
          });
          $('#gotItButton').hide();
          $('#playButton').show();
          $('#rules').hide();
      });


  });
});

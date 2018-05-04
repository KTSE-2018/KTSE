//Responsible for ouputting dialogue to the game
(function(exports){
  function Dialogue() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var input_text = "You have been accepted into one of the world's most prestigious bootcamps."
    var x = 50;
    var y = canvas.height - 150;
    var rectHeight = 100;
    var rectWidth = canvas.width*0.8;

    Dialogue.prototype.drawDialogueBox = function(){
      ctx.beginPath();
      ctx.rect(x,y,rectWidth, rectHeight);
      ctx.fillStyle = "green";
      ctx.fill();
      ctx.closePath();
    }

    Dialogue.prototype.drawDialogueText = function(){
    ctx.beginPath();
    ctx.font = '14pt Calibri';
    ctx.fillStyle = 'black';
    ctx.fillText(input_text, 60, 545);
    ctx.closePath();
    }

    Dialogue.prototype.draw = function(){
      //ctx.clearRect(0,0,canvas.width, canvas.height);
      this.drawDialogueBox();
      this.drawDialogueText();
    }
  }

  exports.Dialogue = Dialogue;
})(this);

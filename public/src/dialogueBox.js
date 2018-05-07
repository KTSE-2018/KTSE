(function(exports) {
  function DialogueBox() {
    this._canvas = document.getElementById("myCanvas");
    this._ctx = this._canvas.getContext("2d");
    this._x = 50;
    this._y = this._canvas.height - 150;
    this._rectHeight = 100;
    this._rectWidth = this._canvas.width * 0.8;
    this._npc = null;
    this._inUse = false;
    this._dialogue = [];
    this._count = 0;

    DialogueBox.prototype.drawDialogueBox = function() {
      this._ctx.beginPath();
      this.drawTextBG(this._ctx, this.dialogueStep(), '20px arial', this._x, this._y);
      this._ctx.closePath();
    }

    DialogueBox.prototype.drawTextBG = function(ctx, txt, font, x, y) {
      ctx.save();
      ctx.font = font;
      ctx.textBaseline = 'top';
      ctx.fillStyle = 'white';
      var width = ctx.measureText(txt).width + 10;
      ctx.fillRect(x, y, width, parseInt(font, 10));
      ctx.fillStyle = '#000';
      ctx.fillText(txt, x, y);
      ctx.restore();
    }

    DialogueBox.prototype.reposition = function() {
      if (this._inUse === true) {
        this.drawDialogueBox();
      }
    }

    DialogueBox.prototype.dialogueStep = function() {
      getId = this._npc._id;
      setName = getId[0].toUpperCase() + getId.substring(1) + ": ";
      return (setName + this._dialogue[this._count]["m"]);
    }

    DialogueBox.prototype.finalDialogue = function() {
      return (this._count === (this._dialogue.length - 1)) ? true : false
    }

    DialogueBox.prototype.show = function(npc) {
      this._npc = npc
      this._dialogue = this._npc.getScript();
      this._inUse = true;
    }

    DialogueBox.prototype.hide = function() {
      this._inUse = false;
      this._count = 0;
    }

    DialogueBox.prototype.gameAction = function() {
      // console.log("CAST MAGIC SPELL")
      this._npc.action();
    }
  }
  exports.DialogueBox = DialogueBox
})(this)

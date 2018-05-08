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
    this.imageObj = new Image()
    this.imageObj.src = '../img/dbox.png'
    this.setName = ''
  }

  DialogueBox.prototype.drawDialogueBox = function() {
    this._ctx.beginPath();

    this._ctx.drawImage(this.imageObj, 50, 300);
    this._ctx.fillStyle = 'black';
    this._ctx.font = '20px Arial';
    wrapCanvasText(this._ctx, this.dialogueStep(), 65, 660, 460, 25);
    this._ctx.fillStyle = 'white';
    this._ctx.fillText(this.setName, 60, 625);
    this._ctx.closePath();
  }

  DialogueBox.prototype.reposition = function() {
    if (this._inUse === true && this._npc.constructor.name === 'Npc') {
      this.drawDialogueBox();
    }
  }

  DialogueBox.prototype.dialogueStep = function() {
    getId = this._npc._id;
    this.setName = getId[0].toUpperCase() + getId.substring(1);
    return (this._dialogue[this._count]["m"]);
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
    this._npc.action();
  }

  exports.DialogueBox = DialogueBox
})(this)

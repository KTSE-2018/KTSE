(function(exports) {
  function Npc(id, npc_x, npc_y, npc_w, npc_h, script, game) {
    this._canvas = document.getElementById("myCanvas");
    this._ctx = this._canvas.getContext("2d");
    this._id = id;
    this._x = npc_x;
    this._y = npc_y;
    this._npc_w = npc_w;
    this._npc_h = npc_h;
    this._script = script;
    this.game = game;
  }

  Npc.prototype.drawNpc = function() {
    this._ctx.beginPath();
    this._ctx.rect(this._x, this._y, this._npc_w, this._npc_h);
    this._ctx.fillStyle = "red";
    this._ctx.fill();
    this._ctx.closePath();
  }

  Npc.prototype.reposition = function(npc) {
    this.drawNpc();
  }

  Npc.prototype.getScript = function() {
    return this._script.container(this._id);
  }

  Npc.prototype.action = function() {

  }

  exports.Npc = Npc;
})(this);

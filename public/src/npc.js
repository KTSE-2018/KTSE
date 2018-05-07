(function(exports) {
  function Npc(id, npc_x, npc_y, npc_w, npc_h, script, game) {
    this._id = id;
    this._npc_x = npc_x;
    this._npc_y = npc_y;
    this._npc_w = npc_w;
    this._npc_h = npc_h;
    this._script = script;
    this.game = game;
  }

  Npc.prototype.drawNpc = function() {
    this.ctx.beginPath();
    this.ctx.rect(this._npc_x, this._npc_y, this._npc_w, this._npc_h);
    this.ctx.fillStyle = this._colour;
    this.ctx.fill();
    this.ctx.closePath();
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

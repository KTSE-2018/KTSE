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

  Npc.prototype.getScript = function() {
    return this._script.container(this._id);

  }
  exports.Npc = Npc;
})(this);

(function(exports) {
  function Npc(id, npc_x, npc_y, npc_w, npc_h, script) {
    this._id = id;
    this._npc_x = npc_x;
    this._npc_y = npc_y;
    this._npc_w = npc_w;
    this._npc_h = npc_h;
    this._script = script;
  }

  Npc.prototype.getScript = function(id) {
    all_scripts = this._script.container(id);
    return all_scripts;
  }
  exports.Npc = Npc;
})(this);

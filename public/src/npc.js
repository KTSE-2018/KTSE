function Npc(id, npc_x, npc_y, npc_w, npc_h){
  this._id = id;
  this._npc_x = npc_x;
  this._npc_y = npc_y;
  this._npc_w = npc_w;
  this._npc_h = npc_h;
}

Npc.prototype.getScript = function(id) {
  return script.container(id);
}

(function(exports)
  {function Script() {
    this._all_scripts =
      {
        dana: [{m: "Hello there."}, {m: "Do you want to meditate?  [Y/N]"}],
        coach: [{m: "Hello there."}, {m: "Do you need help? [Y/N]"}]
      }
  }

  Script.prototype.container = function(id) {
    return this._all_scripts[id];
  }
  exports.Script = Script;
})(this);

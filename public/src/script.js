(function(exports)
  {function Script() {
    this._all_scripts =
      {
        dana: [{m: "Hi Ada!"}, {m: "Do you want to meditate?  [Y/N]"}],
        coach: [{m: "Hello Ada."}, {m: "Do you need help? [Y/N]"}],
        computer: [{m: "You can do project work here..."}, {m: "Work on your project? [Y/N]"}]
      }
  }

  Script.prototype.container = function(id) {
    return this._all_scripts[id];
  }
  exports.Script = Script;
})(this);

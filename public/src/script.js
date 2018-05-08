(function(exports)
  {function Script() {
    this._all_scripts =
      {
        dana: [{m: "Hi Ada! I am Codecraft's Chief Elation Officer."}, {m: "Meditation brings inner stability to improve your\n concentration."}, {m: "Do you want to meditate?  [Y/N]"}],
        coach: [{m: "Hello Ada..."}, {m: "That's a great question."}, {m: "Do you *really* need my help? [Y/N]"}],
        computer: [{m: "You can do project work here..."}, {m: "Work on your project? [Y/N]"}]
      }
  }

  Script.prototype.container = function(id) {
    return this._all_scripts[id];
  }
  exports.Script = Script;
})(this);

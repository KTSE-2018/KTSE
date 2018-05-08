(function(exports)
  {function Script() {
    this._all_scripts =
      {
        dana: [{m: "Hi Ada! I am Codecraft's Chief Elation Officer."}, {m: "Meditation brings inner stability to improve your concentration and energy levels."}, {m: "Do you want to meditate to unleash your 8 chakras and become a higher being?  [Y/N]"}],
        coach: [{m: "Hello Ada. I am one of Codecraft's coaches, here to provide you with project support."}, {m: "**Ada asks a question**"}, {m: "That's a great question... What do YOU think the answer should be?"}, {m: "Do you *really* need my help? [Y/N]"}],
        computer: [{m: "You can do project work here to improve your coding skill and knowledge."}, {m: "The more you work, the better your job prospects"}, {m: "Work on your project? [Y/N]"}]
      }
  }

  Script.prototype.container = function(id) {
    return this._all_scripts[id];
  }
  exports.Script = Script;
})(this);

(function(exports)
  {function Script() {
    this._all_scripts =
      {
        lana: [{m: "Hi Ada! I'm Lana, Codecraft's Chief Elation Officer."},
               {m: "Meditation brings inner stability to improve your concentration and energy levels."},
               {m: "Do you want to meditate to unleash your 8 chakras and become a higher being?  [Y/N]"}],

        ned: [{m: "Hello Ada. I am Ned, one of Codecraft's coaches, here to provide you with project support."},
              {m: "*** Ada asks a really intelligent question ***"},
              {m: "That's a great question... What do YOU think the answer should be?"},
              {m: "*** Ada stares back blankly ***"},
              {m: "Do you *really* need my help? [Y/N]"}],

        computer: [{m: "You can do project work here to improve your coding skill and knowledge."},
                   {m: "The better your project, the better your job prospects."},
                   {m: "Do you want to work on your project? [Y/N]"}]
      }
  }

  Script.prototype.container = function(id) {
    return this._all_scripts[id];
  }
  exports.Script = Script;
})(this);

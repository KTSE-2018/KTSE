function Script() {
  all_scripts =
    {
      dana: [{m: "Hello there."}, {m: "Do you want to meditate?"}],
      coach: [{m: "Hello there."}, {m: "Do you need help?"}]
    }
}

Script.prototype.container = function(id) {
  return all_scripts[id];
}

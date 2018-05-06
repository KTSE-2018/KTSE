function DialogueBox() {
    this._canvas = document.getElementById("myCanvas");
    this._ctx = this._canvas.getContext("2d");
    this._x = 50;
    this._y = this._canvas.height - 150;
    this._rectHeight = 100;
    this._rectWidth = this._canvas.width*0.8;
    this._inUse = false;
    this._dialogue = [{'m':'Engaging dialogue'}, {'m':'MORE engaging dialogue'}];
    this._count = 0;
}

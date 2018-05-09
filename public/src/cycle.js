(function(exports) {

  function Cycle() {
    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.shade = 0;
    this.count = 0;
    this.gameEnd = false;
    this.message = ''
    this.totalCycles = 5
    this.message2 = ''
    this.jobArray = ['Captcha Enterer - $8k', 'Data Enterer - $15k', 'Data Center Support Specialist - $18k', 'IT Support - $21k', 'HTML Code Monkey - $22k', 'Network Technician - $25k', 'Network Systems Administrator - $32k',
      'Junior Software Developer - $40k', 'Software Engineer - $55k', 'Bootcamp Coach - $65k', 'Network Architect - $70k', 'Cloud Architect - $75k', 'Core Developer - $85k', 'Director of Technology - $100k', 'Principal Developer - $150k', 'Cryptocurrency Founder - $220k',
      'Founder of Galaxy Bank - $460k', 'CTO of paceTrex - 1.1m', 'Founder of Hoogle - 3.2m', 'Creator of Internet 2.0 - 999m'
    ]
  }

  Cycle.prototype.drawCollisionBox = function() {
    this.ctx.beginPath();
    this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = `rgba(0, 0, 0, ${this.shade})`;
    this.ctx.fill();
    this.ctx.fillStyle = 'white';
    this.ctx.font = '20px Arial';

    this.ctx.fillText(this.message, 100, 200);
    this.ctx.fillText(this.message2, 100, 250)

    this.ctx.closePath();
  }

  Cycle.prototype.reposition = function() {
    this.drawCollisionBox();
  }

  Cycle.prototype.turnOver = function(projectScore) {
    this.message = 'Action points depleted, press [X] to start a new day.'
    this.message2 = `${this.totalCycles - this.count - 1} days remaining...`
    this.count += 1
    if (this.count === this.totalCycles) {
      this.gameOver('c', projectScore)
    }
    this.shade = 1
  }

  Cycle.prototype.turnStart = function() {
    this.message = ''
    this.message2 = ''
    this.shade = 0
  }

  Cycle.prototype.gameOver = function(type, score = 0) {
    this.projectScore = score
    if (type === 'e') {
      this.message = 'Your energy has depleted and you have not finished'
      this.message2 = 'the course, you are banished to the fourth floor for eternity.'
    } else if (type === 'c') {
      this.message = 'Congratulations! You have completed Codecraft!'
      this.message2 = `Your new job is ${this.jobSelect()}.`
    }
    this.shade = 1
    this.gameEnd = true;
  }

  Cycle.prototype.jobSelect = function() {
    return (this.projectScore > this.jobArray.length ? this.jobArray[9] : this.jobArray[this.projectScore]  )
  }

  exports.Cycle = Cycle;
})(this);

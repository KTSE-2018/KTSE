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
    this.jobArray = ['Data Enterer', 'IT Support', 'HTML Code Monkey', 'Network Technician',
      'Junior Software Developer', 'Software Engineer', 'Core Developer', 'Principal Developer at Twitter',
      'Founder of Galaxy Bank', 'CTO of SpaceEx'
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
    // console.log(score)
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

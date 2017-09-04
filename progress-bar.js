class ProgressBar {
	constructor(percentage = 0) {
  	this.percentage = percentage;
    this.timeout = 50;
    this.$filler = document.querySelector('.progress-bar__filler');
    this.$percentage = document.querySelector('.progress-bar__percentage');
  }

  _increasePercentage() {
  	this.percentage++;
  }

  _updateFiller() {
    this.$filler.style.width = `${this.percentage}%`;
    this.$percentage.innerText = `${this.percentage}%`;
  }

  _increaseProgress() {
  	this._increasePercentage();
    this._updateFiller();
  }

  isSuccess() {
  	return this.percentage >= 100;
  }

  run() {
  	const intervalId = setInterval(() => {
      this._increaseProgress();

      if (this.isSuccess()) {
      	clearInterval(intervalId);
      }
    }, this.timeout);
  }
}

const progressBar = new ProgressBar();
progressBar.run();

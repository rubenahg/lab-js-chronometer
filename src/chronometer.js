class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      if(typeof printTimeCallback === "function") return printTimeCallback();
      this.currentTime++;
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
      return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    if(value < 10){
      return `0${value.toString()}`
    } else {
      return `${value.toString()}`
    }
  }

  stop() {
    return clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`

  }
}
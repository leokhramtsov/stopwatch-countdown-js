import Clock from "./clock";

class Stopwatch extends Clock {
  constructor(display, lapResults) {
    super(display);
    this.timePassed = 0;
    this.previousLap = 0;
    this.laps = [];
    this.lapResults = lapResults;
  }

  start() {
    this.started = true;
    this.active = true;
    this.startTime = Date.now() - this.timePassed;
    console.log(this);
    this.tInterval = setInterval(() => {
      this.updateTime();
    }, 10);
  }

  reset() {
    super.reset();
    this.timePassed = 0;
    this.laps = [];
  }

  updateTime() {
    this.timePassed = Date.now() - this.startTime;
    const time = this.getTime(this.timePassed);
    this.watch = { ...time };
    this.print();
  }

  setLap() {
    let lapTime;
    if (!this.previousLap) {
      lapTime = this.getTime(this.timePassed);
      this.previousLap = this.timePassed;
    } else {
      lapTime = this.getTime(this.timePassed - this.previousLap);
      this.previousLap = this.timePassed;
    }

    const lap = {
      totalTime: { ...this.watch },
      lapTime: { ...lapTime },
      id: this.laps.length + 1
    };
    const updatedLaps = [...this.laps, lap];
    this.laps = updatedLaps;
    return lap;
  }
}

export default Stopwatch;

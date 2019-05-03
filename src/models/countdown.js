import Clock from "./clock";

class Countdown extends Clock {
  start() {
    if (!this.watch.m && !this.watch.s && !this.watch.ms) return;

    const mInMilliseconds = this.watch.m * 60000;
    const sInMilliseconds = this.watch.s * 1000;
    const milliseconds = this.watch.ms * 10;
    const totalTimeChosen = mInMilliseconds + sInMilliseconds + milliseconds;

    this.started = true;
    this.active = true;
    this.startTime = Date.now() + totalTimeChosen;
    this.tInterval = setInterval(() => {
      this.updateTime();
    }, 10);
  }

  setTime(prop, val) {
    this.watch = { ...this.watch, [prop]: val || 0 };
    this.print();
  }

  updateTime() {
    const remaining = this.startTime - Date.now();
    const currentTimerTime = this.getTime(remaining);
    if (remaining > 0) {
      this.watch = { ...currentTimerTime };
      this.print();
    } else {
      this.reset();
    }
  }
}

export default Countdown;

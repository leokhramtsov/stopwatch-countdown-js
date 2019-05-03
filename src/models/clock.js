import { formatTime } from "../helpers/formatTime";

class Clock {
  constructor(display) {
    this.display = display;
    this.watch = { m: 0, s: 0, ms: 0 };
    this.started = false;
    this.active = false;
    this.startTime = 0;
    this.tInterval = null;
  }

  print() {
    this.display.innerText = `${formatTime(this.watch)}`;
  }

  stop() {
    clearInterval(this.tInterval);
    this.active = false;
  }

  reset() {
    clearInterval(this.tInterval);
    this.started = false;
    this.active = false;
    this.startTime = 0;
    this.watch = { m: 0, s: 0, ms: 0 };
    this.print();
  }

  getTime(timeInMiliseconds) {
    const timeLapsed = new Date(timeInMiliseconds);
    const m = timeLapsed.getUTCMinutes();
    const s = timeLapsed.getUTCSeconds();
    const ms = Math.floor(timeLapsed.getUTCMilliseconds() / 10);
    return { m, s, ms };
  }
}

export default Clock;

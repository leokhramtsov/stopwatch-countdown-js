import Stopwatch from "./models/stopwatch";
import Countdown from "./models/countdown";
import * as stopwatchView from "./views/stopwatchView";
import * as countdownView from "./views/countdownView";
import * as controlsView from "./views/controlsView";

import "./styles.scss";

const state = {};
const init = () => {
  if (!state.stopwatch) {
    state.stopwatch = new Stopwatch(
      document.querySelector(".stopwatch.display"),
      document.querySelector(".stopwatch.results")
    );
    state.stopwatch.print();
    controlsView.renderStopwatchControls(
      state.stopwatch.active,
      state.stopwatch.started
    );
  }

  if (!state.countdown) {
    state.countdown = new Countdown(
      document.querySelector(".countdown.display")
    );
    state.countdown.print();
    controlsView.renderCountdownControls(
      state.stopwatch.active,
      state.stopwatch.started
    );
  }
};

init();

// Stopwatch event listeners
document
  .querySelector(".stopwatch.btn__start")
  .addEventListener("click", () => {
    state.stopwatch.start();
    controlsView.renderStopwatchControls(
      state.stopwatch.active,
      state.stopwatch.started
    );
  });

document.querySelector(".stopwatch.btn__stop").addEventListener("click", () => {
  state.stopwatch.stop();
  controlsView.renderStopwatchControls(
    state.stopwatch.active,
    state.stopwatch.started
  );
});

document
  .querySelector(".stopwatch.btn__reset")
  .addEventListener("click", () => {
    state.stopwatch.reset();
    stopwatchView.clearResults();
    controlsView.renderStopwatchControls(
      state.stopwatch.active,
      state.stopwatch.started
    );
  });

document.querySelector(".stopwatch.btn__lap").addEventListener("click", () => {
  if (state.stopwatch.active) {
    const lap = state.stopwatch.setLap();
    stopwatchView.renderResults(lap);
  }
});

// Countdown event listeners
const timeInputs = document.querySelectorAll(
  '.time-adjuster input[type="number"'
);
timeInputs.forEach(input =>
  input.addEventListener("input", e => {
    state.countdown.setTime(e.target.name, e.target.value);
  })
);

document
  .querySelector(".countdown.btn__start")
  .addEventListener("click", () => {
    state.countdown.start();
    controlsView.renderCountdownControls(
      state.countdown.active,
      state.countdown.started
    );
    countdownView.renderTimeAdjuster(state.countdown.started);
  });

document.querySelector(".countdown.btn__stop").addEventListener("click", () => {
  state.countdown.stop();
  controlsView.renderCountdownControls(
    state.countdown.active,
    state.countdown.started
  );
  countdownView.renderTimeAdjuster(state.countdown.started);
});

document
  .querySelector(".countdown.btn__reset")
  .addEventListener("click", () => {
    state.countdown.reset();
    stopwatchView.clearResults();
    controlsView.renderCountdownControls(
      state.countdown.active,
      state.countdown.started
    );
    countdownView.resetTimeInputs();
    countdownView.renderTimeAdjuster(state.countdown.started);
  });

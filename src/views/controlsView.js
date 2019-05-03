export const renderStopwatchControls = (active, started) => {
  if (active) {
    document.querySelector(".stopwatch.btn__start").style.display = "none";
    document.querySelector(".stopwatch.btn__stop").style.display =
      "inline-block";
  } else {
    document.querySelector(".stopwatch.btn__start").style.display =
      "inline-block";
    document.querySelector(".stopwatch.btn__stop").style.display = "none";
  }

  if (started) {
    document.querySelector(".stopwatch.btn__reset").style.display =
      "inline-block";
    document.querySelector(".stopwatch.btn__lap").style.display =
      "inline-block";
  } else {
    document.querySelector(".stopwatch.btn__reset").style.display = "none";
    document.querySelector(".stopwatch.btn__lap").style.display = "none";
  }
};

export const renderCountdownControls = (active, started) => {
  if (active) {
    document.querySelector(".countdown.btn__start").style.display = "none";
    document.querySelector(".countdown.btn__stop").style.display =
      "inline-block";
  } else {
    document.querySelector(".countdown.btn__start").style.display =
      "inline-block";
    document.querySelector(".countdown.btn__stop").style.display = "none";
  }

  if (started) {
    document.querySelector(".countdown.btn__reset").style.display =
      "inline-block";
  } else {
    document.querySelector(".countdown.btn__reset").style.display = "none";
  }
};

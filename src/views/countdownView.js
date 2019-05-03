export const resetTimeInputs = () => {
  const timeInputs = document.querySelectorAll(
    '.time-adjuster input[type="number"'
  );
  timeInputs.forEach(input => (input.value = "0"));
};

export const renderTimeAdjuster = started => {
  if (started) {
    document.querySelector(".time-adjuster").style.display = "none";
  } else {
    document.querySelector(".time-adjuster").style.display = "block";
  }
};

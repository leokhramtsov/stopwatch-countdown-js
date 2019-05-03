import { pad, formatTime } from "../helpers/formatTime";

export const renderResults = lap => {
  const { lapTime, totalTime, id } = lap;
  const markup = `
    <li>
      <span class="lap__id">Lap ${pad(id)}</span>
      ${formatTime(totalTime)}
      <span class="lap__time">${formatTime(lapTime)}</span>
    </li>
  `;

  document.querySelector(".laps").insertAdjacentHTML("beforeend", markup);
};

export const clearResults = () => {
  document.querySelector(".laps").innerHTML = "";
};

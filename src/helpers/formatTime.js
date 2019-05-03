export const pad = val => (val < 10 ? `0${val}` : val);

export const formatTime = timeObj => {
  const { m, s, ms } = timeObj;
  const pad = val => (val < 10 ? `0${val}` : val);

  return `${pad(m)} : ${pad(s)} : ${pad(ms)}`;
};

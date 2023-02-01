const second_hand = document.querySelector(".second");
const minute_hand = document.querySelector(".min");
const hour_hand = document.querySelector(".hour");

const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondDegrees = ((seconds / 60) * 360) + 90;
  second_hand.style.transform = `rotate(${secondDegrees}deg)`;
  // minute
  const minute = now.getMinutes();
  const minuteDegrees = ((minute / 60) * 360) + 90;
  minute_hand.style.transform = `rotate(${minuteDegrees}deg)`;
  // hour
  const hour = now.getHours();
//   const de = minute * 60000;
//   console.log(hour)
  const hourDegrees = ((hour / 12) * 360) + 90;
  hour_hand.style.transform = `rotate(${hourDegrees}deg)`;
};
setInterval(setDate, 1000);

export default function timeLeft(endTime) {
  const time = Date.parse(endTime) - Date.parse(new Date());
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / 1000 / 60) % 60);
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  const days = Math.floor(time / (1000 * 60 * 60 * 24));

  return {
    total: time,
    days,
    hours,
    minutes,
    seconds,
  };
}

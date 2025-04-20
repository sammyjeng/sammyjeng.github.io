// Clock functionality
function getCurrentTime() {
  const currentTime = new Date();
  const hours = formatDigits(currentTime.getHours());
  const minutes = formatDigits(currentTime.getMinutes());
  const seconds = formatDigits(currentTime.getSeconds());
  return `${hours}:${minutes}:${seconds}`;
}

function formatDigits(value) {
  return value < 10 ? `0${value}` : value;
}

function updateClock() {
  const clock = document.getElementById('clock');
  if (clock) {
    clock.textContent = getCurrentTime();
  }
}

// Log fun message
console.log('Stop looking into the console for too long, you might turn into a hacker');

// Initialize clock
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('clock')) {
    updateClock();
    setInterval(updateClock, 1000);
  }
});
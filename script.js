function revealMessage() {
  document.getElementById("secret").style.display = "block";
}

// Countdown
const birthday = new Date("2025-06-15T00:00:00").getTime(); // CHANGE TO HER ACTUAL BIRTHDAY
const timer = setInterval(function () {
  const now = new Date().getTime();
  const distance = birthday - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "🎂 It's Your Birthday! 🎉";
  }
}, 1000);

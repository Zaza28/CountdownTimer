//créer la logique du compte à rebours :
let choice = document.getElementById("choice");
let form = document.querySelector("form");
let countDownDisplay = document.getElementById("countdownDisplay");
let btn = document.getElementById("start");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let totalSec = choice.value * 60;

  let timer = setInterval(() => {
    let min = Math.floor(totalSec / 60);
    let sec = totalSec % 60;

    let formatTime = `${min}:${sec < 10 ? "0" + sec : sec}`;
    countDownDisplay.textContent = formatTime;
    totalSec--;

    if (totalSec < 0) {
      clearInterval(timer);
    }
  }, 1000);
  choice.value = "";
});
btn.addEventListener("click", timer);

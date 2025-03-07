let txt = document.querySelector("h2");
let resetBtn = document.getElementById("reset-btn");
let seconds = 30;
let timer;
let clickCount = 0;
function startTimer() {
  if (clickCount >= 10) {
    alert("끝났습니다!");
    return;
  }
  clearInterval(timer);
  seconds = 30;
  txt.textContent = seconds;
  clickCount++;
  timer = setInterval(() => {
    seconds--;
    txt.textContent = seconds;
    if (seconds === 0) {
      clearInterval(timer);
    }
  }, 1000);
}
resetBtn.addEventListener("click", startTimer);
startTimer();

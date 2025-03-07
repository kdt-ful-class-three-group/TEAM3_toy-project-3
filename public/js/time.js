let txt = document.getElementById("timerMain");
// let resetBtn1 = document.getElementById("reset-btn1");
// let resetBtn2 = document.getElementById("reset-btn2");
let timer;
let clickCount = 0;
let seconds = "";
function startTimer() {
  if (clickCount >= 10) {
    // alert("끝났습니다!");
    clickCount = 0; //초기화
  }

  clearInterval(timer);
  seconds = 30;
  txt.textContent = seconds + "초";
  clickCount++;

  timer = setInterval(() => {
    seconds--;
    txt.textContent = seconds + "초";
    if (seconds === 0) {
      clearInterval(timer);
    }
  }, 1000);
}
export default startTimer;
// startTimer();/
// resetBtn1.addEventListener("click", startTimer);
// resetBtn2.addEventListener("click", startTimer);
// startTimer();

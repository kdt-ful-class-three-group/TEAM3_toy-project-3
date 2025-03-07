let txt = document.querySelector("h2");
let resetBtn1 = document.getElementById("reset-btn1");
let resetBtn2 = document.getElementById("reset-btn2");
let timer;
let clickCount = 0;

function startTimer() {
  if (clickCount >= 10) {
    alert("끝났습니다!");
    clickCount = 0; //초기화
  }

  clearInterval(timer);
  seconds = 5;
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

resetBtn1.addEventListener("click", startTimer);
resetBtn2.addEventListener("click", startTimer);
startTimer();

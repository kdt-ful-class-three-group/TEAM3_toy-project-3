import imgChange from "./championCheck.js";
let txt = document.getElementById("timerMain");
// let resetBtn1 = document.getElementById("reset-btn1");
// let resetBtn2 = document.getElementById("reset-btn2");
let championblue = document.getElementById("championblue"); // 블루팀 벤 픽 이미지
let championred = document.getElementById("championRed"); // 레드팀 벤 픽 이미지
let blueBtn = document.getElementById("blueBanBtn");
let redBtn = document.getElementById("redBanBtn");

let seconds = 5;
let timer;
let currentTeam = "blue";
let clickCount = 0;
let blueImgIndex = 0; // 블루팀 벤픽 카운트
let redImgIndex = 0; // 레드팀 벤픽 카운트

function startTimer() {
  if (clickCount >= 10) {
    alert("끝났습니다!");
    clickCount = 0; //초기화
    window.location.reload(); // 새로고침
  }
  clearInterval(timer);
  seconds = 5;
  txt.textContent = seconds + "초";

  timer = setInterval(() => {
    seconds--;
    txt.textContent = seconds + "초";
    if (seconds === 0) {
      if (currentTeam === "blue") {
        blueImgIndex++;
        switchTurn();
      } else {
        redImgIndex++;
        switchTurn();
      }
      //clearInterval(timer);
      //switchTurn(); // 30초 후 자동 턴 변경
    }
  }, 1000);
}

function switchTurn() {
  if (currentTeam === "blue") {
    currentTeam = "red";
    blueBtn.style.display = "none";
    redBtn.style.display = "block";
    blueTeam.style.backgroundColor = "";
    redTeam.style.backgroundColor = "#ff000082";
  } else if (currentTeam === "red") {
    currentTeam = "blue";
    blueBtn.style.display = "block";
    redBtn.style.display = "none";
    redTeam.style.backgroundColor = "";
    blueTeam.style.backgroundColor = "#0080ff82";
  }
  //console.log(`현재 턴: ${currentTeam}`);
  clickCount++;
  startTimer(); // 턴이 바뀌면 타이머 다시 시작
}

blueBtn.addEventListener("click", () => {
  if (currentTeam === "blue") {
    switchTurn("blue");
  }
});

redBtn.addEventListener("click", () => {
  if (currentTeam === "red") {
    switchTurn("red");
  }
});

function banPickLogic(elements) {
  elements.forEach((elementdata) => {
    elementdata.addEventListener("click", () => {
      elementdata.style.pointerEvents = "none";
      elementdata.style.opacity = "0.3";
      let allChecked = clickLabel.every((input) => input.checked); //* 모든 input이 checked인지 확인 (전역변수로 두면 체크된지 안된지 확인이 안됨)
      if (allChecked) {
        if (blueBtn.style.display === "block") {
          let mainImg = elementdata.querySelector("img");
          let blueImgs = championblue.querySelectorAll("img");
          let blueImg = blueImgs[blueImgIndex];
          blueImg.src = mainImg.src;
        } else if (redBtn.style.display === "block") {
          let mainImg = elementdata.querySelector("img");
          let redImgs = championred.querySelectorAll("img");
          let redImg = redImgs[redImgIndex];
          redImg.src = mainImg.src;
        }
      } else {
        alert("챔피언을 선택해주세요.");
      }
    });
  });
}

export default startTimer;
// startTimer();/
// resetBtn1.addEventListener("click", startTimer);
// resetBtn2.addEventListener("click", startTimer);
// startTimer();

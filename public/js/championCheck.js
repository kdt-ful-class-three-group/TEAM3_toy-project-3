// DOM 요소 선택
import startTimer from "./time.js";
import { sendBanPickData } from "./api.js"
// import { banPickData } from "../data/data.js";
let championblue = document.getElementById("championblue"); // 블루팀 벤 픽 이미지
let championred = document.getElementById("championRed"); // 레드팀 벤 픽 이미지
let blueTeam = document.getElementById("blueTeam"); // 블루팀 챔피언 선택
let redTeam = document.getElementById("redTeam"); // 레드팀 챔피언 선택
let blueBtn = document.getElementById("blueBanBtn"); // 블루팀 버튼
let redBtn = document.getElementById("redBanBtn"); // 레드팀 버튼
let clickLabel = Array.from(document.querySelectorAll(".champion-check input")); // 체크박스 배열
let blueImgIndex = 0; // 블루팀 벤픽 카운트
let redImgIndex = 0; // 레드팀 벤픽 카운트
let article = document.querySelectorAll("article label"); // 모든 label 요소 선택

let txt = document.getElementById("timerMain");
// let resetBtn1 = document.getElementById("reset-btn1");
// let resetBtn2 = document.getElementById("reset-btn2");
// let blueBtn = document.getElementById("blueBanBtn");
// let redBtn = document.getElementById("redBanBtn");
let seconds = 5;
let timer;
let currentTeam = "blue";
let clickCount = 0;
let teamClick = "";
let teamColor = ""; // 팀 색상

const savedPicks = new Set();
//* 각 label 요소에 배경 이미지 설정
article.forEach((label, j) => {
  label.style.backgroundImage = `url(../public/img/cham${j}.jpg)`;
});

//* 체크박스 클릭 이벤트 설정
clickLabel.forEach((element) => {
  element.addEventListener("click", () => {
    let allChecked = clickLabel.every((input) => input.checked); //* 모든 input이 checked인지 확인 (전역변수로 두면 체크된지 안된지 확인이 안됨)
    //* 블루팀 벤픽 로직
    if (allChecked) {
      blueTeam.style.backgroundColor = "#0080ff82";
      startTimer();
    }
  });
});

//* 각 팀별 벤픽 함수
export function imgChange(color) {
  let allChecked = clickLabel.every((input) => input.checked); //* 모든 input이 checked인지 확인 (전역변수로 두면 체크된지 안된지 확인이 안됨)
  console.log(savedPicks);
  //* 블루팀 벤픽 로직
  if (allChecked) {
    if (blueImgIndex < 5 && color === "blue") {
      // blueImgIndex++;
      blueBtn.style.display = "none";
      redBtn.style.display = "block";
      blueTeam.style.backgroundColor = "";
      redTeam.style.backgroundColor = "#ff000082";

      startTimer();
    }
    //* 레드팀 벤픽 로직
    if (redImgIndex < 5 && color === "red") {
      // redImgIndex++;
      blueBtn.style.display = "block";
      blueTeam.style.backgroundColor = "#0080ff82";
      redTeam.style.backgroundColor = "";
      redBtn.style.display = "none";
      startTimer();
    }
    if (teamClick) {
      teamClick.classList.add("pointerEventNone");
      savedPicks.add(teamClick); // 저장된 챔피언 목록에 추가
    }
    //* 블루팀 벤픽 카운트 초기화
    if (blueImgIndex === 5 && color === "blue") {
      // clearInterval(timer);
      blueImgIndex = 0;
      startTimer();
    }
    //* 레드팀 벤픽 카운트 초기화
    if (redImgIndex === 5 && color === "red") {
      // clearInterval(timer);
      redImgIndex = 0;
      startTimer();
    }
  } else {
    alert("챔피언을 선택해주세요.");
  }
}

//* 벤픽 로직 함수

let banPickData = { blue: { ban: [], pick: [] }, red: { ban: [], pick: [] } };

export { banPickData };
// 자꾸 클릭하면 마지막 선택한 챔피언이 계속해서 바뀌는 문제가 있음
// 변수선언해서 마지막으로 선택한 챔피언을 저장해두고, 버튼 클릭시에 저장된 챔피언을 이미지에 삽입
let lastSelectedChampion = null; 
let lastSelectedImgSrc = null; 

// 벤픽로직 조금 변경.
function banPickLogic(elements) {
  // elements 모든 챔피언 리스트 div
  elements.forEach((elementdata) => {
    elementdata.addEventListener("click", () => {
      let allChecked = clickLabel.every((input) => input.checked);

      if (allChecked) {
        let mainImg = elementdata.querySelector("img");
        lastSelectedChampion = mainImg.getAttribute("data-name"); 
        lastSelectedImgSrc = mainImg.src; 

        if (blueBtn.style.display === "block" && blueImgIndex < 5) {
          let blueImgs = championblue.querySelectorAll("img");
          blueImgs[blueImgIndex].src = lastSelectedImgSrc;
        } else if (redBtn.style.display === "block" && redImgIndex < 5) {
          let redImgs = championred.querySelectorAll("img");
          redImgs[redImgIndex].src = lastSelectedImgSrc;
        }
      } else {
        alert("챔피언을 선택해주세요.");
      }
    });
  });
}

//* 블루팀 버튼 클릭 이벤트
blueBtn.addEventListener("click", () => {
  if (lastSelectedChampion && blueImgIndex < 5) {
    let blueImgs = championblue.querySelectorAll("img");
    let blueImg = blueImgs[blueImgIndex];

    // 벤 이미지 변경, 데이터추가
    blueImg.src = lastSelectedImgSrc; 
    banPickData.blue.ban.push(lastSelectedChampion); 
    blueImgIndex++; 

   

    console.log("Blue Team Banned: " + lastSelectedChampion);
    if (banPickData.blue.ban.length === 5 && banPickData.red.ban.length === 5) {
      sendBanPickData(banPickData);
    }
  }
});

//* 레드팀 버튼 클릭 이벤트
redBtn.addEventListener("click", () => {
  if (lastSelectedChampion && redImgIndex < 5) {
    let redImgs = championred.querySelectorAll("img");
    let redImg = redImgs[redImgIndex];

    // 벤 이미지 변경, 데이터 추가
    redImg.src = lastSelectedImgSrc; 
    banPickData.red.ban.push(lastSelectedChampion); 
    redImgIndex++; 

  

    console.log("Red Team Banned: " + lastSelectedChampion);
    if (banPickData.blue.ban.length === 5 && banPickData.red.ban.length === 5) {
      sendBanPickData(banPickData);
    }
  }
});


//* 전역 범위에 imgChange 함수를 노출
window.imgChange = imgChange;

export default banPickLogic;

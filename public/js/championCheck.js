// DOM 요소 선택
import startTimer from "./time.js";
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
let teamColor = ""; // 팀 색상
let teamClick = "";
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
function imgChange(color, pickDiv) {
  let allChecked = clickLabel.every((input) => input.checked); //* 모든 input이 checked인지 확인 (전역변수로 두면 체크된지 안된지 확인이 안됨)
  console.log(pickDiv);
  //* 블루팀 벤픽 로직
  if (allChecked) {
    if (blueImgIndex < 5 && color === "blue") {
      blueImgIndex++;
      teamColor = color;
      blueBtn.style.display = "none";
      redBtn.style.display = "block";
      blueTeam.style.backgroundColor = "";
      redTeam.style.backgroundColor = "#ff000082";
      if (teamClick) {
        teamClick.classList.add("pointerEventNone");
      }
      startTimer();
    }
    //* 레드팀 벤픽 로직
    if (redImgIndex < 5 && color === "red") {
      redImgIndex++;
      teamColor = color;
      blueBtn.style.display = "block";
      blueTeam.style.backgroundColor = "#0080ff82";
      redTeam.style.backgroundColor = "";
      redBtn.style.display = "none";
      if (teamClick) {
        teamClick.classList.add("pointerEventNone");
      }
      startTimer();
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
function banPickLogic(elements) {
  // elements 모든 챔피언 리스트 div
  elements.forEach((elementdata) => {
    elementdata.addEventListener("click", () => {
      let mainImg = elementdata.querySelector("img");
      let allChecked = clickLabel.every((input) => input.checked);
      if (allChecked) {
        if (blueBtn.style.display === "block") {
          let blueImgs = championblue.querySelectorAll("img");
          let blueImg = blueImgs[blueImgIndex];
          blueImg.src = mainImg.src;
        } else if (redBtn.style.display === "block") {
          let redImgs = championred.querySelectorAll("img");
          let redImg = redImgs[redImgIndex];
          redImg.src = mainImg.src;
        }
      } else {
        alert("챔피언을 선택해주세요.");
      }
    });
  });
  pickOverlap(elements);
}

function pickOverlap(banContent) {
  banContent.forEach((element) => {
    element.addEventListener("click", function () {
      if (redImgIndex < 5 && teamColor === "red") {
        // imgChange("red", this);
        teamClick = this;
        teamColor = "red";
      } else if (blueImgIndex < 5 && teamColor === "blue") {
        teamColor = "blue";
        teamClick = this;
      }
    });
    // this.classList.remove("pointerEventNone");
  });
}

//* 전역 범위에 imgChange 함수를 노출
window.imgChange = imgChange;

export default banPickLogic;

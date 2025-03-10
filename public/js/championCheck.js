// DOM 요소 선택
import startTimer from "./time.js";
import {sendBanPickData} from "./api.js"
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

//* 이미지 변경 함수
function imgChange(color) {
  let allChecked = clickLabel.every((input) => input.checked); //* 모든 input이 checked인지 확인 (전역변수로 두면 체크된지 안된지 확인이 안됨)
  //* 블루팀 벤픽 로직
  if (allChecked) {
    if (blueImgIndex < 5 && color === "blue") {
      blueImgIndex++;
      blueBtn.style.display = "none";
      redBtn.style.display = "block";
      blueTeam.style.backgroundColor = "";
      redTeam.style.backgroundColor = "#ff000082";
      console.log("blue" + blueImgIndex);
      startTimer();
    }
    //* 레드팀 벤픽 로직
    if (redImgIndex < 5 && color === "red") {
      redImgIndex++;
      blueBtn.style.display = "block";
      blueTeam.style.backgroundColor = "#0080ff82";
      redTeam.style.backgroundColor = "";
      redBtn.style.display = "none";
      console.log("red" + redImgIndex);
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

// 벤픽 데이터 들어갈 배열 api.js에 fetch로 export
let banPickData = {
  blue: { ban: [], pick: [] },
  red: { ban: [], pick: [] }
};
export { banPickData }

function banPickLogic(elements) {
  elements.forEach((elementdata) => {
    elementdata.addEventListener("click", () => {
      // elementdata.style.pointerEvents = "none";
      // elementdata.style.opacity = "0.3";
      let allChecked = clickLabel.every((input) => input.checked); //* 모든 input이 checked인지 확인 (전역변수로 두면 체크된지 안된지 확인이 안됨)
      if (allChecked) {
        // mainImg 밖으로 뺌.(하나로 쓰려고)// getAtrribute로 data-name가져옴.
        let mainImg = elementdata.querySelector("img");
        let championName = mainImg.getAttribute("data-name");
        if (blueBtn.style.display === "block") {
          // let mainImg = elementdata.querySelector("img");
          let blueImgs = championblue.querySelectorAll("img");
          let blueImg = blueImgs[blueImgIndex];
          blueImg.src = mainImg.src;
          banPickData.blue.ban.push(championName);


        } else if (redBtn.style.display === "block") {
          // let mainImg = elementdata.querySelector("img");
          let redImgs = championred.querySelectorAll("img");
          let redImg = redImgs[redImgIndex];
          redImg.src = mainImg.src;
          banPickData.red.ban.push(championName);
        }
        // red,blue 벤이 5개일경우 조건 집어넣음.
       if (banPickData.blue.ban.length === 5 || banPickData.red.ban.length === 5) {
        sendBanPickData();
        }
        
      } else {
        alert("챔피언을 선택해주세요.");
      }
    });
  });
}

//* 전역 범위에 imgChange 함수를 노출
window.imgChange = imgChange;

export default banPickLogic;

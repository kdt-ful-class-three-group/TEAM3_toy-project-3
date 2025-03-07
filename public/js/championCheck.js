// let championCheck = {};

let championblue = document.getElementById("championblue"); //* 블루팀 벤 픽 이미지
let championred = document.getElementById("championRed"); //* 레드팀 벤 픽 이미지
let blueTeam = document.getElementById("blueTeam"); //* 블루팀 챔피언 선택
let redTeam = document.getElementById("redTeam"); //* 레드팀 챔피언 선택
let blueBtn = document.getElementById("blueBanBtn"); //* 블루팀 버튼
let redBtn = document.getElementById("redBanBtn"); //* 레드팀 버튼
let main = document.querySelectorAll(".championMainWrap > div"); //* 벤 할 챔피언
let clickLabel = Array.from(document.querySelectorAll(".champion-check input"));
let blueImgIndex = 0; //* 블루팀 벤픽 카운트
let redImgIndex = 0; //* 레드팀 벤픽 카운트
let article = document.querySelectorAll("article label");
// article.forEach((element, i) => {
// let labels = article.querySelectorAll("label");
article.forEach((label, j) => {
  label.style.backgroundImage = `url(../public/img/cham${j}.jpg)`;
});
// });
clickLabel.forEach((element) => {
  element.addEventListener("click", () => {
    let allChecked = clickLabel.every((input) => input.checked); //* 모든 input이 checked인지 확인 (전역변수로 두면 체크된지 안된지 확인이 안됨)
    //* 블루팀 벤픽 로직
    if (allChecked) {
      blueTeam.style.backgroundColor = "#0080ff82";
    }
  });
});

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
    }
    //* 레드팀 벤픽 로직
    if (redImgIndex < 5 && color === "red") {
      redImgIndex++;
      blueBtn.style.display = "block";
      blueTeam.style.backgroundColor = "#0080ff82";
      redTeam.style.backgroundColor = "";

      redBtn.style.display = "none";
      console.log("red" + redImgIndex);
    }
    //* 블루팀 벤픽 카운트 초기화
    if (blueImgIndex === 5 && color === "blue") {
      blueImgIndex = 0;
    }
    //* 레드팀 벤픽 카운트 초기화
    if (redImgIndex === 5 && color === "blue") {
      redImgIndex = 0;
    }
  } else {
    alert("챔피언을 선택해주세요.");
  }

  // console.log(blueImgIndex);
}
function banPickLogic(elements) {
  elements.forEach((elementdata) => {
    elementdata.addEventListener("click", () => {
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
// elementdata.style.pointerEvents = "none"; 클릭 못하게 막는 이벤트
// elementdata.style.opacity = "0.3";
window.imgChange = imgChange;

export default banPickLogic;

// let championCheck = {};

let championblue = document.getElementById("championblue"); //* 블루팀 벤 픽 이미지
let championred = document.getElementById("championred"); //* 레드팀 벤 픽 이미지
let blueBtn = document.getElementById("blueBanBtn"); //* 블루팀 버튼
let redBtn = document.getElementById("redBanBtn"); //* 레드팀 버튼

let main = document.querySelectorAll(".championMainWrap > div"); //* 벤 할 챔피언
let blueImgIndex = 0; //* 블루팀 벤픽 카운트
let redImgIndex = 0; //* 레드팀 벤픽 카운트

function imgChange(color) {
  //* 블루팀 벤픽 로직
  if (blueImgIndex < 5 && color === "blue") {
    blueImgIndex++;
    blueBtn.style.display = "none";
    redBtn.style.display = "block";
    console.log("blue" + blueImgIndex);
    // } else {
    //   blueImgIndex = 0;
  }
  //* 레드팀 벤픽 로직
  if (redImgIndex < 5 && color === "red") {
    redImgIndex++;
    blueBtn.style.display = "block";
    redBtn.style.display = "none";
    console.log("red" + redImgIndex);
    // } else {
    //   redImgIndex = 0;
  }
  //* 블루팀 벤픽 카운트 초기화
  if (blueImgIndex === 5 && color === "blue") {
    blueImgIndex = 0;
  }
  //* 레드팀 벤픽 카운트 초기화
  if (redImgIndex === 5 && color === "blue") {
    redImgIndex = 0;
  }

  // console.log(blueImgIndex);
}
function banPickLogic(elements) {
  elements.forEach((elementdata) => {
    elementdata.addEventListener("click", () => {
      let mainImg = elementdata.querySelector("img");
      let blueImgs = championblue.querySelectorAll("img");
      let blueImg = blueImgs[blueImgIndex];
      blueImg.src = mainImg.src;
      blueImgIndex = (blueImgIndex + 1) % blueImgs.length;
    });
  });
}
// console.log(main);
// function banPickLogic(element) {
//   console.log(element);
//   element.forEach((elementdata) => {
//     elementdata.addEventListener("click", () => {
//       // if (mainImg) {
//       let blueImgs = championblue.querySelectorAll("img");
//       // if (blueImgs.length > 0) {
//       let blueImg = blueImgs[blueImgIndex];
//       // if (blueImg) {
//       blueImg.src = mainImg.src;
//       // blueImgIndex = blueImgIndex % blueImgs.length;
//       // }
//       // }
//       // }
//     });
//   });
// }
window.imgChange = imgChange;

export default banPickLogic;
// main.forEach((mainBtn) => {
//   mainBtn.addEventListener("click", () => {
//     let mainImg = mainBtn.querySelector("img");
//     console.log(mainImg);
//     // if (mainImg) {
//     let blueImgs = championblue.querySelectorAll("img");
//     // if (blueImgs.length > 0) {
//     let blueImg = blueImgs[blueImgIndex];
//     // if (blueImg) {
//     blueImg.src = mainImg.src;
//     // blueImgIndex = blueImgIndex % blueImgs.length;
//     // }
//     // }
//     // }
//   });
// });

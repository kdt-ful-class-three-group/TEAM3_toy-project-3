let championCheck = {};

let championblue = document.getElementById("championblue");
let championred = document.getElementById("championred");

let main = document.querySelectorAll(".championMainWrap > div");
let blueImgIndex = 0;
let redImgIndex = 0;

function imgChange(color) {
  if (blueImgIndex < 5 && color === "red") {
    console.log(color);
    blueImgIndex++;
    // main.forEach((mainBtn) => {
    //   mainBtn.addEventListener("click", () => {
    //     let mainImg = mainBtn.querySelector("img");
    //     if (mainImg) {
    //       let blueImgs = championblue.querySelectorAll("img");
    //       if (blueImgs.length > 0) {
    //         let blueImg = blueImgs[blueImgIndex];
    //         if (blueImg) {
    //           blueImg.src = mainImg.src;
    //           blueImgIndex = blueImgIndex % blueImgs.length;
    //         }
    //       }
    //     }
    //   });
    // });
  } else {
    blueImgIndex = 1;
  }

  if (blueImgIndex < 5 && color === "blue") {
    console.log("11" + color);
    redImgIndex++;
  } else {
    redImgIndex = 1;
  }

  console.log(blueImgIndex);
}

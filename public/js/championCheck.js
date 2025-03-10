import startTimer from "./time.js";
import { sendBanPickData } from "./api.js";

let championblue = document.getElementById("championblue");
let championred = document.getElementById("championRed");
let blueTeam = document.getElementById("blueTeam");
let redTeam = document.getElementById("redTeam");
let blueBtn = document.getElementById("blueBanBtn");
let redBtn = document.getElementById("redBanBtn");
let clickLabel = Array.from(document.querySelectorAll(".champion-check input"));
let blueImgIndex = 0;
let redImgIndex = 0;
let article = document.querySelectorAll("article label");

article.forEach((label, j) => {
  label.style.backgroundImage = `url(../public/img/cham${j}.jpg)`;
});

clickLabel.forEach((element) => {
  element.addEventListener("click", () => {
    let allChecked = clickLabel.every((input) => input.checked);
    if (allChecked) {
      blueTeam.style.backgroundColor = "#0080ff82";
      startTimer();
    }
  });
});

function imgChange(color) {
  let allChecked = clickLabel.every((input) => input.checked);
  if (allChecked) {
    if (blueImgIndex < 5 && color === "blue") {
      blueBtn.style.display = "none";
      redBtn.style.display = "block";
      blueTeam.style.backgroundColor = "";
      redTeam.style.backgroundColor = "#ff000082";
      startTimer();
    }
    if (redImgIndex < 5 && color === "red") {
      blueBtn.style.display = "block";
      blueTeam.style.backgroundColor = "#0080ff82";
      redTeam.style.backgroundColor = "";
      redBtn.style.display = "none";
      startTimer();
    }
  }
}

function banPickLogic(elements) {
  elements.forEach((elementdata) => {
    elementdata.addEventListener("click", () => {
      document.querySelectorAll(".championMainWrap .selected").forEach((el) => el.classList.remove("selected"));
      elementdata.classList.add("selected");

      let mainImg = elementdata.querySelector("img");

      if (blueBtn.style.display === "block" && blueImgIndex < 5) {
        let blueImgs = championblue.querySelectorAll("img");
        blueImgs[blueImgIndex].src = mainImg.src;
        blueImgIndex++; // ✅ 여기에서만 증가
      } else if (redBtn.style.display === "block" && redImgIndex < 5) {
        let redImgs = championred.querySelectorAll("img");
        redImgs[redImgIndex].src = mainImg.src;
        redImgIndex++; // ✅ 여기에서만 증가
      }
    });
  });
}

let banPickData = {
  blue: { ban: [], pick: [] },
  red: { ban: [], pick: [] }
};

export { banPickData };

// ✅ 버튼 클릭 시 JSON 저장만, 이미지 업데이트는 X
blueBtn.addEventListener("click", () => {
  let selectedChampion = document.querySelector(".championMainWrap .selected img");
  if (!selectedChampion) return;

  let championName = selectedChampion.getAttribute("data-name");

  if (!banPickData.blue.ban.includes(championName) && banPickData.blue.ban.length < 5) {
    banPickData.blue.ban.push(championName);
  }

  if (banPickData.blue.ban.length === 5 && banPickData.red.ban.length === 5) {
    sendBanPickData();
  }
});

redBtn.addEventListener("click", () => {
  let selectedChampion = document.querySelector(".championMainWrap .selected img");
  if (!selectedChampion) return;

  let championName = selectedChampion.getAttribute("data-name");

  if (!banPickData.red.ban.includes(championName) && banPickData.red.ban.length < 5) {
    banPickData.red.ban.push(championName);
  }

  if (banPickData.blue.ban.length === 5 && banPickData.red.ban.length === 5) {
    sendBanPickData();
  }
});

window.imgChange = imgChange;

export default banPickLogic;

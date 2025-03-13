import {champPickObj} from "./chamPick_object.js";




export function champstate(color) {
  if (champPickObj.blueImgIndex < 5 && color === "blue") {
    champPickObj.blueImgIndex++; // 1 2 3 4 5
    champPickObj.blueBtn.style.display = "none";
    champPickObj.redBtn.style.display = "block";

    // blueTeam.style.backgroundColor = "";
    // redTeam.style.backgroundColor = "#ff000082";
    // startTimer();
  }
  // //* 레드팀 벤픽 로직
  if (champPickObj.redImgIndex < 5 && color === "red") {
    champPickObj.redImgIndex++; // 1 2 3 4 5
    champPickObj.blueBtn.style.display = "block";
    champPickObj.redBtn.style.display = "none";
    // blueTeam.style.backgroundColor = "#0080ff82";
    // redTeam.style.backgroundColor = "";

    // startTimer();
  }
}

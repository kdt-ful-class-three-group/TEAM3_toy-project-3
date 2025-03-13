export function champstate(color) {
  if (blueImgIndex < 5 && color === "blue") {
    blueImgIndex++; // 1 2 3 4 5
    // blueBtn.style.display = "none";
    // redBtn.style.display = "block";
    // blueTeam.style.backgroundColor = "";
    // redTeam.style.backgroundColor = "#ff000082";
    // startTimer();
  }
  //* 레드팀 벤픽 로직
  if (redImgIndex < 5 && color === "red") {
    redImgIndex++; // 1 2 3 4 5
    // blueBtn.style.display = "block";
    // blueTeam.style.backgroundColor = "#0080ff82";
    // redTeam.style.backgroundColor = "";
    // redBtn.style.display = "none";
    // startTimer();
  }
}

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


let champPickObj = { championblue, championred, blueTeam, redTeam, blueBtn, redBtn, clickLabel, blueImgIndex, redImgIndex, article };
console.log(champPickObj);
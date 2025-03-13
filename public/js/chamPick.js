import banPickLogic from "./banPickLogic.js";
// *  각 버튼 클릭 시 해당 팀의 벤픽 카운트 증가
let blueImgIndex = 0; // 블루팀 벤픽 카운트
let redImgIndex = 0; // 레드팀 벤픽 카운트

//* 각 버튼 클릭 시 해당 이미지 배열에 담기

let arr = {
  blueArr: [],

  //래드팀 배열
  redArr: [],
};
//블루팀 배열

//* 블루팀 벤픽 로직

function imgChange(color) {
  let allChecked = clickLabel.every((input) => input.checked); //* 모든 input이 checked인지 확인 (전역변수로 두면 체크된지 안된지 확인이 안됨)
  if (allChecked) {
    banPickLogic(color);
  }
}

export default { arr };

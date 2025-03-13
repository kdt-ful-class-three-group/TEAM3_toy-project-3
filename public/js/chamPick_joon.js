//*  각 버튼 클릭 시 해당 팀의 벤픽 카운트 증가
let blueImgIndex = 0; // 블루팀 벤픽 카운트
let redImgIndex = 0; // 레드팀 벤픽 카운트

//* 각 버튼 클릭 시 해당 이미지 배열에 담기
//블루팀 배열
let blueArr = [];

//래드팀 배열
let redArr = [];

//* 블루팀 벤픽 로직
function imgChange() {
  let allChecked = clickLabel.every((input) => input.checked); //* 모든 input이 checked인지 확인 (전역변수로 두면 체크된지 안된지 확인이 안됨)
  if (allChecked) {
  }
}


function championCreate(data) {
  let championList = document.getElementById("championList");
  // console.log(data);
  const champions = Object.values(data.data);
  // sort메서드로 정렬해봄.
  champions.sort((a, b) => a.name.localeCompare(b.name, "ko-KR"));

  // 챔피언 목록을 출력.
  function championBox(championArray) {
    championList.innerHTML = "";
    championArray.forEach((element) => {
      // console.log(element.image)
      // p태그 생성하여 챔피언 이름 작성. css도 수정완료 확인바라고 수정할 부분있으면 최현준에게 말해주세요 //
      championList.innerHTML += `
        <div>
          <img src="./public/img/champion/${element.image.full}" alt="${element.name}" data-name="${element.name}">
          <p>${element.name}</p>
        </div>
      `;
    });
    console.log(championBox())
  }
}


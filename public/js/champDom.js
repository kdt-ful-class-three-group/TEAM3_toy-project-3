function championCreate(data) {
  let championList = document.getElementById("championList");
  console.log(data);
  const champions = Object.values(data.data);
  // sort메서드로 정렬해봄.
  champions.sort((a, b) => a.name.localeCompare(b.name, "ko-KR"));

  champions.forEach((element) => {
    console.log(element.image);
    // p태그 생성하여 챔피언 이름 작성. css도 수정완료 확인바라고 수정할 부분있으면 최현준에게 말해주세요 //
    championList.innerHTML += `<div><img src="./public/img/champion/${element.image.full}" alt="${element.name}"><p>${element.name}</p></div>`;
  });
}

export default championCreate;

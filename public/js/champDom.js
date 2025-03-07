// function championCreate(data) {
//   let championList = document.getElementById("championList");
//   console.log(data);
//   const champions = Object.values(data.data);
    // sort메서드로 정렬해봄.
//     champions.sort((a, b) => a.name.localeCompare(b.name, "ko-KR"));

//   champions.forEach((element) => {
//     console.log(element.image);
    // p태그 생성하여 챔피언 이름 작성. css도 수정완료 확인바라고 수정할 부분있으면 최현준에게 말해주세요 //
//     championList.innerHTML += `<div><img src="./public/img/champion/${element.image.full}" alt="${element.name}"><p>${element.name}</p></div>`;
//   });
// }

// export default championCreate;


function championCreate(data) {
  let championList = document.getElementById("championList");
  let searchBox = document.getElementById("searchBox"); // 검색 입력 필드
  console.log(data);

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
          <img src="./public/img/champion/${element.image.full}" alt="${element.name}">
          <p>${element.name}</p>
        </div>
      `;
    });
  }

  // 검색 기능 추가함.
  searchBox.addEventListener("input", function () {
    const searchText = searchBox.value
    const filteredChampions = champions.filter((data) =>
      data.name.includes(searchText) 
    );
    championBox(filteredChampions); 
  });

  championBox(champions);
}

export default championCreate;

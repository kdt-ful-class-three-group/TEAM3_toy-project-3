import banPickLogic from "./championCheck.js";

function championCreate(data) {
  let championList = document.getElementById("championList");
  // console.log(data);
  const champions = Object.values(data.data);
  // sort메서드로 정렬해봄.
  champions.sort((a, b) => a.name.localeCompare(b.name, "ko-KR"));

  champions.forEach((element) => {
    // console.log(element);
    championList.innerHTML += `<div><img src="./public/img/champion/${element.image.full}" alt=""></div>`;
  });
  const createdElements = championList.querySelectorAll("div");
  banPickLogic(createdElements);
}

export default championCreate;

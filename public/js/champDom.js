function championCreate(data) {
  let championList = document.getElementById("championList");
  console.log(data);
  const champions = Object.values(data.data);
  champions.forEach((element) => {
    console.log(element.image);
    championList.innerHTML += `<img src="./public/img/champion/${element.image.full}" alt="">`;
  });
}

export default championCreate;

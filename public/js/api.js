import championCreate from "./champDom.js";

console.log("ww");
// api
fetch("/champ")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    championCreate(data);
  })
  .catch((err) => {
    console.log(`${err} 에러발생`);
  });

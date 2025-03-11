import championCreate from "./champDom.js";
import { banPickData } from "./championCheck.js"

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

// json관련 fetch
  function sendBanPickData() {
  fetch("/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(banPickData),
  })
    .then((response) => response.json())
    .then((data) =>
      console.log(data))
    .catch((err) =>
          console.log(`${err} 에러발생`));
  }

export  { sendBanPickData };
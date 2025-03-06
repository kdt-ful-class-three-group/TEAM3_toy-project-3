import championCreate from "./champDom.js";

// api
fetch("/champ")
  .then((res) => res.json())
  .then((data) => {
    championCreate(data);
  });

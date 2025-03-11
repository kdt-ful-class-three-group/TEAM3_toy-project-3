import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { banPickData } from "./banpick.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, "banpick.json");




function loadBanPickData() {
  if (fs.existsSync(filePath)) {
    try {
      banPickData = JSON.parse(fs.readFileSync(filePath, "utf8"));
    } catch {}
  }
  return banPickData;
}

function saveBanPickData(data) {
  banPickData = data;
  fs.writeFile(filePath, JSON.stringify(banPickData, null, 2), "utf8", (err) => {
    console.log('데이터 저장');
  });
}

export { loadBanPickData, saveBanPickData};
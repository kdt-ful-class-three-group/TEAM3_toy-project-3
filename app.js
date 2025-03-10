import express from "express";
import fs from "fs";
// 원래방식대로 하면 됬는데 안돼서 __dirname사용
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// public 정적파일 사용하기위해 static사용
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static("public"));

const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/champ", (req, res) => {
  const champJson = fs.readFileSync(
    path.join(__dirname, "champion.json"),
    "utf-8"
  );
  const champion = JSON.parse(champJson);
  // console.log(champion);
  res.json(champion);
});
app.post("/save", (req, res) => {
  const banPickData = req.body;
  const filePath = path.join(__dirname, "banpick.json");

  fs.writeFile(filePath, JSON.stringify(banPickData, null, 2), "utf8", (err) => {
    if (err) {
      return res.status(500).json({ message: "데이터 저장 실패" });
    }
    res.json({ message: "데이터 저장 성공!" });
  });
});


app.listen(PORT, () => {
  console.log(`loading... http://localhost:${PORT}`);
});

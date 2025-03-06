import express from 'express'

// 원래방식대로 하면 됬는데 안돼서 __dirname사용
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// public 정적파일 사용하기위해 static사용
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public', express.static('public'));

const PORT = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'));
})



app.listen(PORT, () => {
  console.log(`loading... http://localhost:${PORT}`);
})
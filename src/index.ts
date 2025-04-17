import express from "express"
import cors from "cors"
import { genrateNumber } from "./util";

const app = express();

console.log("Number", genrateNumber())

app.use(cors())
app.use(express.json())

const port = 3000

// app.get('/', (req, res) => {
//   res.render('index');
// });

app.get('/repodeploy', (req, res) => {
  const repoUrl = req.body.repoUrl  //githubUrl
  console.log("Repo Url", repoUrl)

  res.json({})
});

app.listen(port);

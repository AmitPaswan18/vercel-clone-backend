import express from "express"
import cors from "cors"
import { genrateNumber } from "./util";
import { simpleGit } from 'simple-git';


const app = express();

console.log("Number", genrateNumber())

app.use(cors())
app.use(express.json())

const port = 3000


app.get('/repodeploy', (req, res) => {
  const repoUrl = req.body.repoUrl 

  const id =  genrateNumber()
  const output = simpleGit().clone(repoUrl , `     output/${id}`)

  console.log("Repo Url", output)

  res.json({
    message: "Hello World" ,
    data : output
  })
});

app.listen(port);

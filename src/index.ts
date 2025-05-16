import 'dotenv/config'
import express from "express"
import cors from "cors"
import { genrateNumber } from "./util";
import { simpleGit } from 'simple-git';
import path from "path"
import { getAllFilesAsync } from "./getFileName";
import { uploadFile } from "./aws-s3-upload";
import { createClient } from "redis";


const app = express();
const publisher = createClient();
publisher.connect()
app.use(cors())
app.use(express.json())

const port = 3000


app.post('/repodeploy', async (req, res) => {
  const repoUrl = req.body.repoUrl

  const id = genrateNumber()

  await simpleGit().clone(repoUrl, path.join(__dirname, `output/${id}`))

  const files = await getAllFilesAsync(path.join(__dirname, `output/${id}`))

  files.forEach(async (file) => {
    await uploadFile(file.slice(__dirname.length + 1), file)
  })
  publisher.lPush("build-repo", id)


  res.json({
    message: "Your repo has been uploaded and is being deployed",
    data: id
  })
});

app.listen(port);

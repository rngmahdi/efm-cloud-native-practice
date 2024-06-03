import express from "express";
import { mongoose } from "mongoose";
import projectController from "./controller/projectController";
const dbName = "project";
const url = `mongodb://localhost:27017/${dbName}`;
const port = 8000;
const app = express();
app.use(express.json());

mongoose.connect(url)
   .then(() => { console.log("connexion to database is established successfully") })
   .catch((error) => {
      console.log(error)
   })


app.listen(200, () => {
   console.log("hello World");
})

import express from "express";
import { httpFilesListen } from "./src/http-files-n-jsons.js";
import { httpMethodsListen } from "./src/http-methods.js";
import { createHttpServer } from "./src/http-basic-server.js";
import { __dirname } from "./dirname.js";
import fetch from "node-fetch";

export const app = express();

//used to handle requests bodies that send info
app.use(express.text()); //strings, if we do not write this, req.body will be undefined
app.use(express.json()); //jsons
//default to indicate to express that the files to read are not long files
// app.use(express.urlencoded({ extended: false }));

//used to serve all files in static/public folder; html, css, imgs, js
app.use(express.static(__dirname + "static/public"));

app.get("/:username", async (req, res) => {
  if (req.params.username === "buebos") {
    res.send("si");
  } else {
    res.send(`Hello ${req.params.username}`);
  }
});

app.get("/add/:x/:y", (req, res) => {
  const { x, y } = req.params;
  res.send(`Result ${parseInt(x) + parseInt(y)}`);
});

// createHttpServer();
httpFilesListen();
httpMethodsListen();

app.listen(3000);
console.log(`App listening on port http://localhost:${3000}`);
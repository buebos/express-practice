import express from "express";
import * as url from "url";
import { httpFilesListen } from "./src/http-files-n-jsons.js";
import { httpMethodsListen } from "./src/http-methods.js";
import { createHttpServer } from "./src/http-basic-server.js";

export const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
export const app = express();

createHttpServer();

//used to handle requests bodies that send info
app.use(express.text()); //strings, if we do not write this, req.body will be undefined
app.use(express.json()); //jsons
//default to indicate to express that the files to read are not long files
app.use(express.urlencoded({ extended: false }));

//used to serve all files in static/public folder; html, css, imgs, js
app.use(express.static(__dirname + "static/public"));

httpFilesListen();
httpMethodsListen();

app.listen(3000);
console.log(`App listening on port ${3000}`);

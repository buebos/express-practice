// import http from "http";
// import fs from "fs";

// const server = http.createServer((req, res) => {
//   const html = fs.createReadStream("./static/index.html", {
//     encoding: "utf-8"
//   })
//   const css = fs.createReadStream("./static/styles.css")
//   html.pipe(res);
//   css.pipe(res);
// });

// server.listen(3000);

// console.log(`Server listening on port ${3000}`);

import express from "express";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const app = express();

app.get("/products", (req, res) => {
  res.send("Lista de productos");
});

app.post("/products", (req, res) => {
  res.send("Lista de productos");
});

app.listen(3000);
console.log(`App listening on port ${3000}`);

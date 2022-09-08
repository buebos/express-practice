import { __dirname } from "../dirname.js";
import fs from "fs";

// console.log(__dirname);

var pathGlobal;

fs.readFile(__dirname + "\\data\\buebos-path.json", (err, res) => {
  const json = JSON.parse(res.toString());
  const path = json[0];
  pathGlobal = path;
  console.log(path);
});

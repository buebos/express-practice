import { app } from "../main.js";
import { __dirname } from "../dirname.js";

//if we are using ES6 Modules we need to define our __dirname like this:

export const httpFilesListen = () => {
  app.get("/http/getFile", (req, res) => {
    res.sendFile("./data/data.json", {
      root: __dirname,
    });
  });

  app.get("/http/getJson", (req, res) => {
    res.json([
      {
        userName: "Buebos",
        id: "1",
        status: "online",
        about: "hello im buebos",
      },
    ]);
  });
};

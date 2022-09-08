import { app } from "../main.js";

export const httpMethodsListen = () => {
  app.post("/products", (req, res) => {
    //for each method we should do this processes somehow in the server (fazt):

    //validate data
    //someValidateDataFunction();

    //query data
    //someQueryDataFunction();

    //process data
    console.log(JSON.parse(req.body));

    //send status code or a full response
    res.sendStatus(204);
  });

  app.put("/products", (req, res) => {
    res.send("Editing products");
  });

  app.patch("/products", (req, res) => {
    res.send("Updating an aspect of the products");
  });

  app.delete("/products", (req, res) => {
    res.send("Deleting products");
  });
};

import http from "http";
import fs from "fs";

export const createHttpServer = () => {
  const server = http.createServer((req, res) => {
    const html = fs.createReadStream("./static/public/index.html", {
      encoding: "utf-8",
    });
    const css = fs.createReadStream("./static/public/styles.css");
    html.pipe(res);
    css.pipe(res);
  });

  server.listen(3001);

  console.log(`Server listening on port ${3001}`);
};

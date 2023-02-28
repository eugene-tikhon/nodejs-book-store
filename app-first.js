const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Hello page</title></head>");
    res.write("<body><h1>Hello page</h1></body>");
    res.write("</html>");
    res.end();
    return;
  }
});

server.listen(4000);

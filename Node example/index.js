const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.write('<h1 style="color: red">Hello World!</h1>');
    res.write("<p>I wonder what else we can send...</p>");
  } else if (req.url === "/first") {
    res.write('<h1 style="color: red">this is first</h1>');
    res.write("<p>first route</p>");
  } else if (req.url === "/second") {
    res.write('<h1 style="color: red">this is second</h1>');
    res.write("<p>second route</p>");
  } else {
    res.statusCode = 404;
    res.write("<h1>404 page is not found</h1>");
    res.end();
  }
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

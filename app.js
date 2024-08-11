const http = require('http');
const fs = require('fs');
const config = require("./mmodule/config");

http.createServer((req, res) => {
  fs.readFile('./home123.html', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.write('File not found');
    } else {
      res.write(data);
    }
    res.end();
  });
}).listen(config.port);

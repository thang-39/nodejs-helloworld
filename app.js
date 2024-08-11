const http = require('http');
const fs = require('fs');
const url = require('url');

const config = require("./mmodule/config");

function onRequest(req, res) {
  const path = url.parse(req.url).pathname;
  console.log(path);

  if (path == '/about') {
    fs.readFile('./views/about.html', function(err, data) {
      if (err) {
        res.writeHead(404);
        res.write('File not found');
      } else {
        res.write(data);
      }
      res.end();
    });
  } else if (path == '/') {
    fs.readFile('./views/home.html', function(err, data) {
      if (err) {
        res.writeHead(404);
        res.write('File not found');
      } else {
        res.write(data);
      }
      res.end();
    });
  }

  fs.readFile('./views/home.html', function(err, data) {
    if (err) {
      res.writeHead(404);
      res.write('File not found');
    } else {
      res.write(data);
    }
    res.end();
  });
}

http.createServer(onRequest).listen(config.port);

var http = require("http");
const { URL } = require("url");
var fs = require("fs");
var output = require('./NumberQuiz.js');

http.createServer(function (req, res) {
    var q = new URL(req.url, "https://localhost:1010/");
    output.guessnumber(req, res, q.searchParams);
  })
  .listen(1010);
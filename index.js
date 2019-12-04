/*global require*/
/*eslint no-undef: "error"*/
/*eslint-env node*/
var http = require("http");

http.createServer(function (req, res) {
    "use strict";
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("Hello World from NodeJs!");
}).listen(8080);

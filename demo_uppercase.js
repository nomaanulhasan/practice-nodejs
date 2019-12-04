/*global require*/
/*eslint no-undef: "error"*/
/*eslint-env node*/
var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
    "use strict";
    res.writeHead(200, {'Content-Type': 'text/html'});
    /*Use our upper-case module to upper case a string:*/
    res.write(uc("Hello World!"));
    res.end();
}).listen(8080);

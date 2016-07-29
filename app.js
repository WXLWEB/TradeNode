var express = require('express');
var app = express();
var fs = require("fs");
var http = require("http");

app.get('https://pro-data.btcc.com/data/pro/historydata', function (req, res) {
   fs.readFile( __dirname + "/" + "", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})

var express = require('express'), http = require('http')
    ;

var app = express();
var theServer = http.createServer(app);
app.use(express.bodyParser());

app.use(express.static(__dirname + "/src"));
var port = process.env.PORT || 8080;
theServer.listen(port, function () {
    console.log("Listening on " + port);
});
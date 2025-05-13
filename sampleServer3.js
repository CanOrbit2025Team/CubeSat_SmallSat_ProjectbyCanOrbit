console.clear();

var http = require("http"); // Require http only once
var fs=require("fs")

http.createServer(function (request, response) {
    //response.writeHead(200, { "Content-Type": "text/plain" });

    fs.readFile('samplehtml.html',function(err,data){
        response.writeHead(200,{'Content-type':'text/html'})
        response.write(data);
        response.end();
    })

}).listen(8001, () => console.log("Server 3 running on port 8001"));
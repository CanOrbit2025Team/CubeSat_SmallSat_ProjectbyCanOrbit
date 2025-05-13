console.clear();

var http = require("http");
var fs = require("fs");

http.createServer(function (request, response) {
    if(request.url==="/"){
        fs.readFile('samplehtml.html',function(err,data){
            response.writeHead(200,{'Content-type':'text/html'});
            response.write(data);
            response.end();
        });
    }else if(request.url==="/login"){
        response.write('login');
        response.end();
    }else{
        response.writeHead(404,{'Content-type':'text/html'})
        response.write('error');
        response.end();
    }
}).listen(8001,() => console.log("Server 4 running on port 8001"));
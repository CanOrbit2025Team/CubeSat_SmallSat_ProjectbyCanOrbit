console.clear();
var http = require("http"); // Require http only once

// Server 1
http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("CrossRoads Server 1");
    response.end();
}).listen(8000, () => console.log("Server 1 running on port 8000"));

/* / Server 2
function server(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("CrossRoads Server 2");
    response.end();
}
http.createServer(server).listen(7000, () => console.log("Server 2 running on port 7000"));

// Server 3
http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("CrossRoads Server 3");
    response.end();
}).listen(8001, () => console.log("Server 3 running on port 8001"));
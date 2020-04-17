var http = require("http");

http.createServer(function(request, response) {
	
//response.writeHead(200,{"Content-Type ":"text/plain"});

response.end('Hello World! This is Safron');

})
.listen(8088);

console.log("Hey there! I am running...");
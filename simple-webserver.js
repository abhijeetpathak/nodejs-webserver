var http = require('http'),
	host = '127.0.0.1',
	port = 9000;

http.createServer(function(req, res) {
	res.writeHead(200);
	res.end("Hello World!");
}).listen(port, host, function() {
	console.log("Listening on http://" + host + ":" + port);
});
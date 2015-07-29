var http = require('http'),
	fs = require('fs'),
	path = require('path'),
	host = '127.0.0.1',
	port = 9000,
	sitePath = "./sampleStaticSite";

var mimeTypes = {
	".htm"	: "text/html",
	".html"	: "text/html",
	".txt"	: "text/text",
	".png"	: "image/png",
	".gif"	: "image/gif",
	".jpg"	: "image/jpeg",
	".jpeg"	: "image/jpeg"
};

http.createServer(function(req, res) {
	
	var fileName = req.url == "/" ? (sitePath + "/index.htm") : (sitePath + req.url);
	
	fs.exists(fileName, function(fileExists){
		if(fileExists) {
			var ext = path.extname(fileName);
			
			fs.readFile(fileName, function(error, content) {
				if(error) {
					res.writeHead(500);
					res.end('Internal server error.');
				} else {
					res.writeHead(200, {'Content-Type': mimeTypes[ext]});
					res.end(content);
				}
				
			});
		} else {
			res.writeHead(404);
			res.end('File not found.');
		}
	});
	
}).listen(port, host, function() {
	console.log("Listening on http://" + host + ":" + port);
});
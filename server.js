var httpsjinaserver = require('http');

httpsjinaserver.createServer(function(req,res) {
    // res.writeHead(200,{'Content-Type' : 'text-plain'});-----sends response header to request.
    res.end("Hello World!");
}).listen(8080);

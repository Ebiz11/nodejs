var http = require('http');

var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('request was made: '+ req.url);
    
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname+'/readMe.txt','utf8');

    myReadStream.pipe(res);
});

server.listen(2028, '127.0.0.1');

console.log('now listen to port 2018');

var http = require('http');

var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('request was made: '+ req.url);
    
    res.writeHead(200, {'Content-Type' : 'application/json'});
    var myObj = {
        name: 'Ebiz',
        job: 'Ninja',
        age: 24
    };

    res.end(JSON.stringify(myObj));
});

server.listen(2028, '127.0.0.1');

console.log('now listen to port 2018');

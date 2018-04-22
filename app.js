var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('This is homepage');
});

app.get('/contact', function(req, res){
    res.send('this is contact page');
});

app.get('/profile/:name', function(req, res){
    res.send('profile name '+ req.params.name);
})

app.listen(4002);
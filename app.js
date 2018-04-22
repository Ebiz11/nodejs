var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
});

app.get('/contact', function(req, res){
    res.sendFile(__dirname+'/contact.html');
});

app.get('/profile/:name', function(req, res){
    var data = {
        fullname: req.params.name,
        age: 24,
        jobs: 'Ninja',
        hobbies: ['mancing', 'sepakbola', 'tinju']
    };

    res.render('profile', data);
})

app.listen(4002);
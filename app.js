var express = require('express');
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended: false});

var app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
    res.render('index');
});

app.get('/contact', function(req, res){
    res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodeParser, function(req, res){
    res.render('contact-success', {data: req.body});
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

// test

app.listen(4002);
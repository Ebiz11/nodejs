var events = require('events');

var util = require('util');

var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var dele = new Person('dele');
var ali = new Person('ali');
var eriksen = new Person('eriksen');

var people = [dele, ali, eriksen];

people.forEach(function(person){
    person.on('speak', function(msg){
        console.log(person.name + ' said: '+ msg);
    })
});

dele.emit('speak', 'hey dudes');
ali.emit('speak', 'hey dudes');
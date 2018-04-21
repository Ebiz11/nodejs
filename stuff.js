var counter = function(arr){
    return 'There are '+ arr.length + ' elements in this array';
};

var adder = function(a,b){
    return `Hasil penambahan 2 parameter adalah: ${a+b}`;
};

var pi = 3.142;

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};

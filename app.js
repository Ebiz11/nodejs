var fs = require('fs');

fs.readFileSync('readMe.txt', 'utf8', function(err, data){
    console.log(data);
    fs.writeFile('writeMe.txt', data)
});

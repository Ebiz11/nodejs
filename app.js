var fs = require('fs');

fs.mkdir('stuff', function(){ // buat folder dengan nama stuff
    fs.readFile('readMe.txt', 'utf8', function(err, data){ // baca file readMe.txt
        fs.writeFile('./stuff/writeMe.txt', data); // buat filewriteMe.txt di dalam folder stuff
    })
})
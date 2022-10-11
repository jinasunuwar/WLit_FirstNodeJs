const fs = require('fs');

const filepath = 'jina.txt';

fs.readFileSync(filepath, {encoding: 'utf8'},(err,data) => {
    console.log(data);
})

let no_of_fellow = 15;


console.log(no_of_fellow);
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'database.csv');
const regexCellphone = /\(\d+\)\s\d+-\d+/g; // Example regex for cellphone numbers

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    //split by lines
    dataInLines = data.split('\n');
    console.log(dataInLines.length);

     //apply the regex to the data
     let result = data.match(regexCellphone);

    console.log(result);
    console.log(result.length)
});

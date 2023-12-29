const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'database_birth.csv');
//create a regex for date of birth of this format yyyy-mm-dd
const regexForDateBirth = /\d{4}-\d{2}-\d{2}/g;

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    //split by lines
    dataInLines = data.split('\n');
    console.log(dataInLines);

     //apply the regex to the data
     let result = data.match(regexForDateBirth);

    console.log(result);
});

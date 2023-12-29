const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'database.csv');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    let searchWithRegexNameJohn = /John/g;

    //apply the regex to the data
    let result = data.match(searchWithRegexNameJohn);

    console.log(result);
});

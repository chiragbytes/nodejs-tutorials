const { readFile, writeFile } = require('fs');
console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, res2) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = res2;
        writeFile('./content/result-async.txt', `Async file created: ${result} -> ${res2}`, writeComplete)
    })
});
console.log('starting new task');

writeComplete = (err,res) => {
    console.log(err, res);
};
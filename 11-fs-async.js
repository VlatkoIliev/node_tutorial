const { readFile, writeFile } = require('fs');
console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    return;
  }
  const first = result;
  readFile('./content/second.txt', 'utf8', (err, res) => {
    if (err) {
      return;
    }
    const second = res;
    writeFile(
      './content/result-async.txt',
      `here is the result : ${first}, ${second}`,
      (err, res) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done with task');
      }
    );
  });
});
console.log('start next task');

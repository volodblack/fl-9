const rawArgs = process.argv.slice(2);
let args = [];

rawArgs.forEach(val => {
  let commaSep = val.split(',');
  commaSep.forEach(val => {
    if(val !== '') {
      args.push(+val);
    }
  });
});

const avg = (...values) => {
    return values.reduce((sum, n) => sum + n) / values.length;
}

console.log(avg(...args));
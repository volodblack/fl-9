const inputs = process.argv.slice(2);
let result = inputs.map(x => x[0]).reduce((res, x) => res + x);
console.log(result);
const max = process.argv[2];
let FizzBuzz = function*() {
    let i = 1;
    
    while (i <= max) {
        let val = i;
        if (val % 15 === 0) {
            val = 'FizzBuzz';
        } else if (val % 3 === 0) {
            val = 'Fizz';
        } else if (val % 5 === 0) {
            val = 'Buzz';
        }
        i++;
        yield val;
    }
}();

for (let n of FizzBuzz) {
  console.log(n);
}
const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    let i = 1;
    
    return {
        next() {            
            if (i > max) {
                return {done: true};
            }
            let val = i;
            if (val % 15 === 0) {
                val = 'FizzBuzz';
            } else if (val % 3 === 0) {
                val = 'Fizz';
            } else if (val % 5 === 0) {
                val = 'Buzz';
            }
            i++;
            
            return {done: false, value: val};
        }
    } 
  }
}

for (let n of FizzBuzz) {
  console.log(n);
}
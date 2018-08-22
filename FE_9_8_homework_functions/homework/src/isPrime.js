function isPrime(a) {
    const two = 2;
    if (typeof a !== 'number' || !Number.isInteger(a) || a < two) {
        return false;
    } else if (a === two) {
        return true;
    } else if (a % two === 0) {
        return false;
    }
    for (let i = 3; i*i <= a; i+=two) {
        if (a % i === 0) {
            return false;
        }
    }
    return true;   
}
// console.log(isPrime(5));
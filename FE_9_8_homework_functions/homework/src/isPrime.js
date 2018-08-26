function isPrime(a) {
    const two = 2;
    if (a === two) {
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
function getClosestToZero() {
    let closestToZero = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number' || !Number.isInteger(arguments[i])) {
            return 'Enter only integer numbers';
        } else if (Math.abs(arguments[i]) < Math.abs(closestToZero)) {
            closestToZero = arguments[i];
        }
    }
    return closestToZero;
}
// console.log(getClosestToZero(9,5,-4,-9));
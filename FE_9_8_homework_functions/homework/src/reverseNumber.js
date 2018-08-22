function reverseNumber(a) {
    if (typeof a !== 'number' || !Number.isInteger(a)) {
        return 'Enter only one integer number';
    }
    if (a < 0) {
        return -reverseNumber(-a);
    }
    let str = a.toString();
    let strArr = str.split('');
    let rvrsArr = strArr.reverse();
    let rvrs = rvrsArr.join('');
    return Number(rvrs);
}
// console.log(reverseNumber(123));
// console.log(reverseNumber(-456));
// console.log(reverseNumber(1000));
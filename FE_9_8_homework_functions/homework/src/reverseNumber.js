function reverseNumber(a) {
    if (a < 0) {
        return -reverseNumber(-a);
    }
    let str = a.toString();
    let strArr = str.split('');
    let rvrsArr = strArr.reverse();
    let rvrs = rvrsArr.join('');
    return Number(rvrs);
}
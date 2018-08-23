const amount = parseFloat(prompt('Enter amount of money','0'));
const discount = parseFloat(prompt('Enter discount without %', '0'));
const maxDiscount = 100;
let answer;
function validate(num) {
    return typeof num !=='number' || isNaN(num) || num < 0; 
}
if (validate(amount) || validate(discount) || discount > maxDiscount) {
    answer = 'Invalid data';
} else {
    const saved = amount*discount/maxDiscount;
    const newPrice = amount-saved;
    answer = `Price without discount: ` + +amount.toFixed(2) +
    `\nDiscount: ` + +discount.toFixed(2) + `%` +
    `\nPrice with discount: ` + +newPrice.toFixed(2) + 
    `\nSaved: ` + +saved.toFixed(2);
}
console.log(answer);
const a = parseFloat(prompt('Enter amount of money '));
const d = parseFloat(prompt('Enter the discount without %'));
const maxDsc = 100;

const answerTemplate = (a,d,price,savedMoney) => `
Price without discount: ${+a.toFixed(2)}
Discount: ${d}% 
Price with discount: ${+price.toFixed(2)}
Saved: ${+savedMoney.toFixed(2)}
`; 

let answer;

if (validValue(a) || validValue(d) || d > maxDsc) {
    answer = 'Invalid data';
} else {
    const savedMoney = a*(d/100);
    const price = a-savedMoney; 
    answer = answerTemplate(a,d,savedMoney,price);
}

function validValue(numb) {
    return isNaN(numb) || typeof numb !== 'number' || numb < 0;
}

console.log(answer);
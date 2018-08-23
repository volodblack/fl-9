const a = parseFloat(prompt('Enter first side of triangle', '0'));
const b = parseFloat(prompt('Enter second side of triangle','0'));
const angle = parseFloat(prompt('Enter angle between two sides of triangle with out %','0'));
const maxAngle = 179;
let answer;
function validate(num) {
    return typeof num !=='number' || isNaN(num) || num < 0; 
}
if (validate(a) || validate(b) || validate(angle) || angle > maxAngle) {
    answer = 'Invalid data';
} else {
    const toRad = Math.PI*angle/maxAngle;
    const c = Math.sqrt(a*a + b*b - 2*a*b*Math.cos(toRad));
    const prmtr = a + b + c;
    const square = Math.sqrt(prmtr/2*(prmtr/2-a)*(prmtr/2-b)*(prmtr/2-c));
    answer = `c length: ` + +c.toFixed(2) + 
    `\nTriangle square: ` + +square.toFixed(2) + 
    `\nTriangle perimeter: ` + +prmtr.toFixed(2);
}
console.log(answer);
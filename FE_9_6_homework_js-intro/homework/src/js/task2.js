const a = parseFloat(prompt('Enter first side of triangle'));
const b = parseFloat(prompt('Enter second side of triangle'));
const angle = parseFloat(prompt('Enter the angle between two sides'));

const maxAngle = 180;

const answerTemplate = (c,s,p) => `
c length: ${+c.toFixed(2)}
Triangle square: ${+s.toFixed(2)}
Triangle perimeter: ${+p.toFixed(2)}
`;

let answer;

if (validValue(a) || validValue(b) || validValue(angle) || angle > maxAngle) {
    answer = `Invalid data`;
} else {
    const c = sideC(a,b,angle);
    const p = a+b+c;
    const s = triangleSquare(p,a,b,c);
    answer = answerTemplate(c,s,p);
}

function validValue(number) {
    return isNaN(number) || typeof number !== 'number' || number < 0; 
}

function sideC(a,b,angle) {
    const toRad = Math.PI*angle/maxAngle;
    return Math.sqrt(a*a + b*b - 2*a*b*Math.cos(toRad)); 
}

function triangleSquare(p,a,b,c) {
    return Math.sqrt(p/2*(p/2-a)*(p/2-b)*(p/2-c));
}

console.log(answer);
import { calculation } from './calculating-module';

const calculator = {
    display: '0',
    operator: null,
    firstOperand: null,
    waitingForSecondOperand: false
};

export function updateValue() {
    const screen = document.querySelector('.screen');
    screen.value = calculator.display;
}

export function handleOperator(nextOperator) {
    const disValue = calculator.display, 
    operandOne = calculator.firstOperand, 
    operatorNew = calculator.operator, 
    inputValue = parseFloat(disValue);

    if (operandOne === null) {
        calculator.firstOperand = inputValue;
    } else if (operatorNew) {
        const result = calculation[operatorNew](operandOne, inputValue);
        calculator.display = String(result);
        calculator.firstOperand = result; 
    }
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
}

export function inputDigit(digit) {
    const val = calculator.display, 
    waitForSecond = calculator.waitingForSecondOperand; 
    if (waitForSecond === true) {
        calculator.display = digit;
        calculator.waitingForSecondOperand = false;
    } else {    
        calculator.display = val === '0' ? digit : val + digit;
    }
}

export function inputDot(dot) {
    if (calculator.waitingForSecondOperand) {
        return
    }
    if (!calculator.display.includes('.')) {
        calculator.display += dot;
    }
}

export function reset() {
    calculator.display = '0';
    calculator.operator = null;
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
}
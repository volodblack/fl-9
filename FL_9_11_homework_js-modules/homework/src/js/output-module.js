import '../styles/styles.css';
import { inputDot, inputDigit, 
    handleOperator, updateValue, reset } from './interface-module';

const container = document.querySelector('.calculator');
const containerHtml = `
<div class="calculator-keys">
    <div class="calculator-raw-1">
        <input type="text" class="screen" value="" disabled>
        <button class="clear" value="clear">C</button>
    </div>

    <div class="calculator-raw-2">
        <button type="button" value="7">7</button>
        <button type="button" value="8">8</button>
        <button type="button" value="9">9</button>
        <button type="button" class="operator" value="+">+</button>
    </div>

    <div class="calculator-raw-3">
        <button type="button" value="4">4</button>
        <button type="button" value="5">5</button>
        <button type="button" value="6">6</button>
        <button type="button" class="operator" value="-">-</button>
    </div>

    <div class="calculator-raw-4">
        <button type="button" value="1">1</button>
        <button type="button" value="2">2</button>
        <button type="button" value="3">3</button>
        <button type="button" class="operator" value="*">*</button>
    </div>

    <div class="calculator-raw-5">
        <button type="button" class="dot" value=".">.</button>
        <button type="button" value="0">0</button>
        <button type="button" class="equal operator" value="=">=</button>
        <button type="button" class="operator" value="/">/</button>
    </div>
</div>
`;

container.insertAdjacentHTML('afterBegin', containerHtml);

const buttons = document.querySelector('.calculator-keys');

updateValue();

buttons.addEventListener('click', e => {
    const target = e.target;
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        updateValue();
        return;
    }
    if (target.classList.contains('dot')) {
        inputDot(target.value);
        updateValue();
        return;
    }
    if (target.classList.contains('clear')) {
        reset();
        updateValue();
        return;
    }
    inputDigit(target.value);
    updateValue();
});
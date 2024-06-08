let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    if (currentInput === '' && number === '.') {
        currentInput = '0';
    }
    currentInput += number;
    display.innerText = currentInput;
}

function appendOperator(operator) {
    if (currentInput === '') return;
    currentInput += ` ${operator} `;
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function deleteLast() {
    currentInput = currentInput.trim();
    if (currentInput.slice(-1) === '.') {
        currentInput = currentInput.slice(0, -1);
    } else if (currentInput.slice(-1) === ' ') {
        currentInput = currentInput.slice(0, -3);
    } else {
        currentInput = currentInput.slice(0, -1);
    }
    display.innerText = currentInput || '0';
}

function calculate() {
    try {
        let result = eval(currentInput);
        display.innerText = result;
        currentInput = result.toString();
    } catch {
        display.innerText = 'Error';
        currentInput = '';
    }
}

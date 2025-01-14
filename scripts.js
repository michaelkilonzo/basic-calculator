// Constants 
const MAX_DISPLAY_LENGTH = 10; 

// DOM Elements 
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display-container');

// Variables
let opStr = '';
let res = 0;
let currOp = null;
let op2 = true;
let op1 = null;

// Functions 
function calculate(input) {
    if (!isNaN(input) || input === '.') {
        if (op2) {
            opStr = input;
            op2 = false;
        } else {
            // Prevent multiple decimal points
            if (input === '.' && opStr.includes('.')) return;
            opStr += input;
        }
        display.textContent = opStr;
    }
    else if (input === 'AC') {
        reset();
    }
    else if (input === '+/-') {
        if (opStr) {
            opStr = opStr.startsWith('-') ? opStr.slice(1) : `-${opStr}`;
            display.textContent = opStr;
        }
    }
    else if (input === '%') {
        if (opStr) {
            opStr = (parseFloat(opStr) / 100).toString();
            display.textContent = opStr;
            op2 = true;
        }
    }
    else {
        handleOperator(input);
    }
}

function handleOperator(operator) {
    if (opStr === '' && op1 === null) {
        // If no number entered yet, do nothing
        return;
    }

    const inputValue = parseFloat(opStr || '0');

    if (currOp && op2) {
        currOp = operator;
        return;
    }

    if (op1 === null) {
        op1 = inputValue;
    } else if (currOp) {
        const result = performCalculation[currOp](op1, inputValue);
        res = result;
        display.textContent = formatResult(res);
        op1 = result;
    }

    currOp = operator;
    op2 = true;
    opStr = '';
}

const performCalculation = {
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '/': (firstOperand, secondOperand) => {
        if (secondOperand === 0) {
            display.textContent = 'Error';
            return null;
        }
        return firstOperand / secondOperand;
    },
};

function formatResult(val) {
    if (val === null) return 'Error';
    
    // Convert to string and remove trailing zeros after decimal point
    let valStr = parseFloat(val.toFixed(10)).toString();
    
    if (valStr.length > MAX_DISPLAY_LENGTH) {
        if (Math.abs(val) >= Math.pow(10, MAX_DISPLAY_LENGTH)) {
            return parseFloat(val.toExponential(MAX_DISPLAY_LENGTH - 6)).toString();
        }
        return parseFloat(val.toPrecision(MAX_DISPLAY_LENGTH)).toString();
    }
    
    return valStr;
}

function reset() {
    opStr = '';
    op1 = null;
    op2 = true;
    currOp = null;
    res = 0;
    display.textContent = '0';
}

// Event Listeners 
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        let input = event.target.textContent;
        if (input === '=') {
            if (currOp && op1 !== null && opStr !== '') {
                handleOperator(input);
                currOp = null;
                op2 = true;
            }
        } else {
            calculate(input);
        }
    });
});

// Initialize 
reset();
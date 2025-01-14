// Constants 
const MAX_DISPLAY_LENGTH = 10; 

// DOM Elements 
const buttons = document.querySelectorAll('button'); // list of all button elements
const display = document.querySelector('.display-container');

// Variables
let opStr = ''; // To store the current number or operator
let res = 0; // To store the result
let currOp = null; // To store the current operator
let op2 = null; // To track if the next input should be a new operand
let op1 = null; // To store the first operand

// Functions 
function calculate(input) {
    // Check if the input is a number or decimal
    if (!isNaN(input) || input === '.') {
        if (op2) {
            opStr = input;
            op2 = null;
        } else {
            opStr += input;
        }
        display.textContent = opStr;
    }
    // If input is 'AC', reset everything
    else if (input === 'AC') {
        reset();
    }
    // Handle +/- and % functionality
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
    // Handle operators
    else {
        handleOperator(input);
    }
}

function handleOperator(operator) {
    // Convert the current input string to a float number
    const inputValue = parseFloat(opStr);

    if (currOp && op2) {
        currOp = operator;
        return;
    }

    // If the first operand is null, store the current input value
    if (op1 === null) {
        op1 = inputValue;
    } else if (currOp) {
        const result = performCalculation[currOp](op1, inputValue);
        res = result;
        // Round and truncate display result to 10 digits max
        display.textContent = formatResult(res); 
        op1 = result;
    }

    // Set the operator for the next calculation
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
            alert("Cannot divide by zero");
            return firstOperand;
        }
        return firstOperand / secondOperand;
    },
};

// Format result to fit in display window
function formatResult(val) {
    const valStr = val.toString();
    if (valStr.length > MAX_DISPLAY_LENGTH) {
        // If the integer part is too long, use scientific notation
        if (Math.floor(val).toString().length >= MAX_DISPLAY_LENGTH) {
            return val.toExponential(5); // Adjust the number of significant figures as needed
        }
        // Otherwise, truncate the decimal part
        return val.toFixed(MAX_DISPLAY_LENGTH - Math.floor(val).toString().length);
    }
    return valStr;
}

function reset() {
    opStr = '';
    res = 0;
    op1 = null;
    currOp = null;
    op2 = null;
    display.textContent = '0';
}

// Event Listeners 
// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        let input = event.target.textContent;
        calculate(input);
    });
});

// Initialize 
reset();
// Constants 
// DOM Elements 
const buttons = document.querySelectorAll('button'); // list of all button elements
const display = document.querySelector('.display-container');
// Flags
// Functions 
function calculate(input) {
    // parse op digit 
    if (parseInt(input) || input == '.') {
        opStr += input;
        res = parseFloat(opStr);
    }
    else if (input == 'AC') {
        reset()
    }
    // operator 
    else {
        console.log('operator', input);
    }
    display.textContent = res;
}

function reset() {
    opStr = '';
    res = 0;
}

// Event Listeners 
// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        let input = event.target.textContent
        calculate(input);
    });
});

// Driver 
var res = 0;
var opStr = "";

display.textContent = res;
console.log(parseInt(display.textContent));
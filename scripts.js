// Constants 
// DOM Elements 
const buttons = document.querySelectorAll('button'); // Select all button elements
// Flags
// Functions 
function calculate(input) {
    // digit 
    if (parseInt(input)) {
        opStr += input;
        console.log('digit', input, opStr);
    }
    // operator 
    else {
        console.log('operator', input);
    }
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
let stack = [0];
let opStr = "";
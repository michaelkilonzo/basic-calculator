// Constants 
// DOM Elements 
const buttons = document.querySelectorAll('button'); // Select all button elements
// Flags
// Functions 
function calculate(input) {
    input = parseInt(input) || input;
    console.log(input)
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
let stack = [];

// Constants 
// DOM Elements 
const buttons = document.querySelectorAll('button'); // Select all button elements
// Flags
// Functions 
// Event Listeners 
// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        console.log(`${event.target.textContent}`);
    });
});

// Driver 

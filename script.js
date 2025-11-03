let counter = 0; // The state variable

// Get DOM elements
const valueDisplay = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const setInput = document.getElementById('set-input');
const setBtn = document.getElementById('set-btn');
const resetBtn = document.getElementById('reset-btn');

// Function to update the display (Read Operation)
function updateDisplay() {
    valueDisplay.textContent = counter;
}

// 1. Update (Increment)
incrementBtn.addEventListener('click', () => {
    counter++;
    updateDisplay();
});

// 2. Update (Decrement)
decrementBtn.addEventListener('click', () => {
    counter--;
    updateDisplay();
});

// 3. Create/Update (Set Value from input)
setBtn.addEventListener('click', () => {
    const newValue = parseInt(setInput.value, 10);
    
    // Check if the input is a valid number
    if (!isNaN(newValue)) {
        counter = newValue;
        updateDisplay();
        setInput.value = ''; // Clear input after setting
    } else {
        alert('Please enter a valid number to set the value.');
    }
});

// 4. Delete (Reset to 0)
resetBtn.addEventListener('click', () => {
    counter = 0;
    updateDisplay();
});

// Initial display on load
updateDisplay();
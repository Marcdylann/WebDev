// Function to append characters to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to evaluate the expression in the display
function calculate() {
    var expression = document.getElementById('display').value;
    var result = eval(expression);
    document.getElementById('display').value = result;
}

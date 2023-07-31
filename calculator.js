
function handleKeyPress(event) {
    const key = event.key;
    const display = document.getElementById("display");

    // Allow only numbers, arithmetic operators, the Enter key (to calculate), and the Backspace key (to delete).
    if (/[\d+\-*/]|Enter|Backspace/.test(key)) {
        if (key === "Enter") {
            calculateResult();
        } else if (key === "Backspace") {
            display.value = display.value.slice(0, -1); // Remove the last character
        } else {
            display.value += key;
        }
    } else {
        // Prevent any other key inputs from changing the display
        event.preventDefault();
    }
}

function handleMouseClick(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function calculateResult() {
    const display = document.getElementById("display");
    const expression = display.value;
    try {
        const sanitizedExpression = expression.replace(/[^-()\d/*+.]/g, '');
        const result = Function('"use strict";return (' + sanitizedExpression + ')')();
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}
function handleClear() {
    const display = document.getElementById("display");
    display.value = '';
}

function handleDelete() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}
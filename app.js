let displayScreen = document.querySelector('.display')
let numberButtons = document.querySelectorAll('.number')


// Basic operations of any calculator
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        console.log("Stop,Clown")
        return
    }
    return a / b;
}

//
function operate(operation, firstNum, secondNum) {
    return operation(firstNum, secondNum)
}


let displayValue = '';
function populateDisplay(number) {
    displayValue += number;
    displayScreen.textContent = displayValue;
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log("Number Clicked ")
        populateDisplay(button.textContent)
    })
})




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
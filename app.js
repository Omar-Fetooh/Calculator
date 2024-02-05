let displayScreen = document.querySelector('.display')
let numberButtons = document.querySelectorAll('.number')
let equalButton = document.querySelector('.equalButton')
let clearButton = document.querySelector('.clearButton')
let percentageButton = document.querySelector('.percentage')

let operators = document.querySelectorAll('.OPERATOR')
let currentOperation;
let firstNum;
let secondNum;
let ramEmpty = true;

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
    return (a / b).toFixed(2);
}

function operate(operation, firstNum, secondNum) {
    // return operation(firstNum, secondNum)
    console.log(operation)
    if (operation === '+') {
        return add(firstNum, secondNum)
    }
    else if (operation === '-') {
        return subtract(firstNum, secondNum)
    }
    else if (operation === '*') {
        return multiply(firstNum, secondNum)
    }
    else if (operation === '/') {
        return divide(firstNum, secondNum)
    }
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
        if (ramEmpty == true) {
            firstNum = Number(button.textContent);
            ramEmpty = false
        }
        else {
            secondNum = Number(button.textContent);
            ramEmpty = false;
        }
    })
})

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        console.log(operator.textContent)
        currentOperation = operator.textContent
    })
})

equalButton.addEventListener('click', () => {
    console.log(typeof (firstNum))
    console.log((firstNum))
    console.log((secondNum))
    let res = operate(currentOperation, firstNum, secondNum)
    console.log(Number(res))
    displayScreen.textContent = res;

    firstNum = Number(res);
    secondNum = ""
    displayValue = res;
    ramEmpty = true;
})

clearButton.addEventListener('click', () => {
    displayScreen.textContent = 0;
    displayValue = "";
    ramEmpty = true;
})


percentageButton.addEventListener('click', () => {
    displayValue = (firstNum / 100).toFixed(3);
    displayScreen.textContent = displayValue;
})
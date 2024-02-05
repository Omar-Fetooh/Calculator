let displayScreen = document.querySelector('.display'); // the physical Screen to display purpose
let numberButtons = document.querySelectorAll('.number');
let equalButton = document.querySelector('.equalButton');
let clearButton = document.querySelector('.clearButton');
let percentageButton = document.querySelector('.percentage');
let operators = document.querySelectorAll('.OPERATOR');
let signButton = document.querySelector('.changeSign');
let percesionButton = document.querySelector('.percision')
let currentOperation;
let firstNum = "";
let secondNum = "";
let displayValue = "0"; // To hold numeric values

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
        displayScreen.textContent = 'stop,Clown'
        return;
    }
    return (a / b).toFixed(2);
}

function operate(operation, firstNum, secondNum) {
    //Conversion From string to float
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);

    if (operation === '+') {
        return add(firstNum, secondNum);
    } else if (operation === '-') {
        return subtract(firstNum, secondNum);
    } else if (operation === '*') {
        return multiply(firstNum, secondNum);
    } else if (operation === '/') {
        return divide(firstNum, secondNum);
    }
}

function populateDisplay(number) {
    if (currentOperation) {  // if first number entered and add operation
        secondNum += number;
        displayValue = secondNum; //strings
    }
    else {
        firstNum += number;
        displayValue = firstNum; //strings
    }
    displayScreen.textContent = displayValue; //strings
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        populateDisplay(button.textContent); //passed as string value
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        currentOperation = operator.textContent;
    });
});

equalButton.addEventListener('click', () => {
    if (currentOperation === '/' && secondNum === "0") {
        displayScreen.textContent = "Stop ,clown"
    }
    else {
        if (currentOperation === undefined || currentOperation === "") {
            displayScreen.textContent = firstNum;
            displayValue = firstNum;
            return;
        }
        let result = operate(currentOperation, firstNum, secondNum);
        displayScreen.textContent = result;
        firstNum = result.toString();
        displayValue = firstNum;//I have added this line 
    }
    secondNum = "";
    currentOperation = "";
});

clearButton.addEventListener('click', () => {
    displayScreen.textContent = "0";
    displayValue = "0";
    firstNum = "";
    secondNum = "";
    currentOperation = "";
});

percentageButton.addEventListener('click', () => {
    let percentageResult = (parseFloat(displayValue) / 100).toFixed(2);
    displayValue = percentageResult.toString();
    displayScreen.textContent = displayValue;
    firstNum = displayValue;
    secondNum = ""
    currentOperation = ""
});

signButton.addEventListener('click', () => {
    let signResult = -1 * parseFloat(displayValue);
    displayValue = signResult.toString();
    displayScreen.textContent = displayValue;
    firstNum = displayValue;
    secondNum = ""
    currentOperation = ""
})

percesionButton.addEventListener('click', () => {
    displayScreen.textContent += '.';
    displayValue += '.'
    populateDisplay('.')
})
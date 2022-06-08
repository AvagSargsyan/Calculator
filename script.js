const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const equalsButton = document.querySelector('.equals');
const acButton = document.querySelector('.ac');
const clearButton = document.querySelector('.clear');
const answer = document.createElement('div');
answer.classList.add('answer');

let num1,
    num2,
    operation,
    result;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return 'Can\'t divide by zero!';
    }
    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+': return add(num1, num2);
            break;
        case '-': return subtract(num1, num2);
            break;
        case '*': return multiply(num1, num2);
            break;
        case '/': return divide(num1, num2);
            break;
    }
    return 'No such operation!';
}

function ac() {
    display.textContent = '';
    num1 = undefined;
    num2 = undefined;
    operation = undefined;
    result = undefined;
}

numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (display.textContent === 'Can\'t divide by zero!') {
            ac();
        }
        display.textContent += button.textContent;
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (operation) {
            num2 = +(display.textContent.split(operation)[1]);
            answer.textContent = operate(operation, num1, num2);
            result = operate(operation, num1, num2);
            display.textContent = '';
            display.appendChild(answer);
            num1 = result;
            num2 = undefined;
            operation = button.textContent;
            display.textContent += button.textContent;
        } else if (display.textContent === 'Can\'t divide by zero!') {
            ac();
        } else {
            num1 = +(display.textContent);
            display.textContent += button.textContent;
            operation = button.textContent;
        }
    });
});

equalsButton.addEventListener('click', (e) => {
    if (operation) {
        num2 = +(display.textContent.split(operation)[1]);
        answer.textContent = operate(operation, num1, num2);
        result = operate(operation, num1, num2);
        display.textContent = '';
        display.appendChild(answer);
        num1 = result;
        num2 = undefined;
        operation = undefined;
    }
});

acButton.addEventListener('click', ac);

clearButton.addEventListener('click', ac);

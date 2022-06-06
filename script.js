const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const equalsButton = document.querySelector('.equals');
const acButton = document.querySelector('.ac');

let num1,
    num2,
    operation;

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

function test(func, p1, p2, ans) {
    if (func(p1, p2) === ans) {
        return 'Test passed.';
    } else {
        return 'Error';
    }
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+' : return add(num1, num2);
        break;
        case '-' : return subtract(num1, num2);
        break;
        case '*' : return multiply(num1, num2);
        break;
        case '/' : return divide(num1, num2);
        break;
    }
    return 'No such operation!';
}

function displayOutput(str) {
    display.textContent += str;
}

function ac() {
    display.textContent = '';
    num1 = undefined;
    num2 = undefined;
    operation = undefined;
}

numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        displayOutput(button.textContent);
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (operation) {
            num2 = +(display.textContent.split(operation)[1]);
            display.textContent = '';
            displayOutput(operate(operation, num1, num2));

            //should take the result as num1 and do the new operation on num1 and the number that will be pushed next.
            
        } else {
            num1 = +display.textContent;
            operation = button.textContent;
            displayOutput(button.textContent);
            console.log(num1, operation);
        }
    });
});

equalsButton.addEventListener('click', (e) => {
    if (operation) {
        num2 = +(display.textContent.split(operation)[1]);

        display.textContent = '';
        displayOutput(operate(operation, num1, num2));
        console.log(display.textContent);
        console.log(num2);
    }
});

acButton.addEventListener('click', (e) => {
    ac();
})

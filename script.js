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

console.log(operate('+', 10, 20));
console.log(operate('-', 10, 20));
console.log(operate('*', 10, 20));
console.log(operate('/', 10, 20));
console.log(operate('/', 10, 0));
console.log(operate('%', 10, 20));

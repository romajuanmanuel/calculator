const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (array) {
    return array.reduce((total, num) => total + num, 0);
};

const multiply = function (array) {
    return array.reduce((total, num) => total * num, 1);
};

const divide = function (a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
};

const power = function (a, b) {
    return Math.pow(a, b);
};

const factorial = function (n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
};

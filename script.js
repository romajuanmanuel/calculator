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

// Validación de entrada del usuario en el campo de texto

  const display = document.getElementById("display");

  let a = null;
  let operador = null;
  let b = null;

  display.addEventListener("input", () => {
    let value = display.value;

    // Eliminar caracteres inválidos
    value = value.replace(/[^0-9+\-*/.]/g, "");

    // Regex actualizado: permite negativos al inicio o en el segundo número
    const match = value.match(/^(-?\d*\.?\d*)([+\-*/]?)(-?\d*\.?\d*)$/);

    if (match) {
      display.value = match[1] + match[2] + match[3];
    } else {
      // Si no es una expresión válida, se limpia
      alert("Entrada inválida. Por favor, ingrese una expresión válida.");
      display.value = "";
    }
  });



const operate = function(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply([a, b]);
        case '/':
            return divide(a, b);
        case '^':
            return power(a, b);
        default:
            throw new Error("Invalid operator");
    }
}
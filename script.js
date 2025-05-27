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
  let resultadoPrevio = null;

  display.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      // Validar antes de calcular
      const value = display.value;
      const match = value.match(/^(-?\d*\.?\d*)([+\-*/])(-?\d*\.?\d*)$/);

      if (match) {
        a = parseFloat(match[1]);
        operador = match[2];
        b = parseFloat(match[3]);

        const resultado = calcular(a, operador, b);
        if (resultado !== null) {
          display.value = resultado;
          resultadoPrevio = resultado.toString();

          // Resetear valores para próxima operación
          a = operador = b = null;
        }
      } else {
        alert("Expresión incompleta o inválida");
      }
    }
  });

  display.addEventListener("input", () => {
    let value = display.value;

    // Eliminar caracteres inválidos
    value = value.replace(/[^0-9+\-*/.]/g, "");

    // Si hay resultado anterior y el usuario empieza a escribir un operador, continuar la operación
    if (resultadoPrevio && /^[+\-*/]$/.test(value)) {
      value = resultadoPrevio + value;
      resultadoPrevio = null;
    }

    // Validar estructura general
    const match = value.match(/^(-?\d*\.?\d*)([+\-*/]?)(-?\d*\.?\d*)$/);

    if (match) {
      a = match[1];
      operador = match[2];
      b = match[3];
      display.value = `${a}${operador}${b}`;

      if (a && operador && b !== "") {
        console.log("a:", a, "operador:", operador, "b:", b);
      }
    } else {
      // Expresión inválida → eliminar último carácter
      alert("Expresión inválida");
      display.value = value.slice(0, -1);
    }
  });

  function calcular(a, operador, b) {
    switch (operador) {
      case "+": return a + b;
      case "-": return a - b;
      case "*": return a * b;
      case "/": return b !== 0 ? a / b : "Error";
      default: return null;
    }
    /*-------------- BOTON CLEAR -------------*/
const clearBtn = document.getElementById("clear");

  clearBtn.addEventListener("click", () => {
    display.value = "";
    a = null;
    b = null;
    operador = null;
    resultadoPrevio = null;
  });
  }
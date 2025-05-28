// Validación de entrada del usuario en el campo de texto
const display = document.getElementById("display");

let a = null;
let operador = null;
let b = null;
let resultadoPrevio = null;

display.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();

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
        a = operador = b = null;
      }
    } else {
      alert("Expresión incompleta o inválida");
    }
  }
});

display.addEventListener("input", () => {
    let value = display.value;
  
    // Solo permitir números, operadores y punto
    value = value.replace(/[^0-9+\-*/.]/g, "");
  
    // Si hay resultado previo y se empieza con un operador, continuar la operación
    if (resultadoPrevio && /^[+\-*/]$/.test(value)) {
      value = resultadoPrevio + value;
      resultadoPrevio = null;
    }
  
    const match = value.match(/^(-?\d*\.?\d*)([+\-*/]?)(-?\d*\.?\d*)$/);
  
    if (match) {
      a = match[1];
      operador = match[2];
      b = match[3];
  
      // ❌ Validar múltiples puntos en a o b
      const puntosA = (a.match(/\./g) || []).length;
      const puntosB = (b.match(/\./g) || []).length;
  
      if (puntosA > 1 || puntosB > 1) {
        alert("Solo se permite un punto decimal por número");
        display.value = value.slice(0, -1);
        return;
      }
  
      display.value = `${a}${operador}${b}`;
  
      if (a && operador && b !== "") {
        console.log("a:", a, "operador:", operador, "b:", b);
      }
    } else {
      // Si rompe la estructura general (por ejemplo doble operador), eliminar último carácter
      alert("Expresión inválida");
      display.value = value.slice(0, -1);
    }
  });

/*-------------- BOTON CLEAR -------------*/
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", () => {
  display.value = "";
  a = null;
  b = null;
  operador = null;
  resultadoPrevio = null;
});

/*-------------- BOTONES CLICKABLES -------------*/
const buttons = document.querySelectorAll("button[data-value]");
const equalsBtn = document.getElementById("equals");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const val = btn.getAttribute("data-value");

    // Si hay resultado previo y se clickea un operador, continuar operación
    if (resultadoPrevio && /^[+\-*/]$/.test(val)) {
      display.value = resultadoPrevio + val;
      resultadoPrevio = null;
    } else {
      display.value += val;
    }

    // Dispara el mismo flujo que el input manual
    display.dispatchEvent(new Event("input"));
  });
});

equalsBtn.addEventListener("click", () => {
  const enterEvent = new KeyboardEvent("keydown", { key: "Enter" });
  display.dispatchEvent(enterEvent);
});

/*-------------- FUNCION CALCULAR -------------*/
function calcular(a, operador, b) {
  switch (operador) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/":
      if (b === 0) {
        alert("Nice try. Can't divide by zero 😏");
        return null;
      }
      return a / b;
    default:
      return null;
  }
}

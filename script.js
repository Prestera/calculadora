const subPantalla = document.querySelector(".subPantalla");
const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

let operacionActual = '';
let operadorSeleccionado = '';
let nuevoNumero = false;

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            subPantalla.textContent = "";
            operacionActual = '';
            operadorSeleccionado = '';
            nuevoNumero = false;
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                const resultado = eval(operacionActual + pantalla.textContent);
                subPantalla.textContent = `${operacionActual}${pantalla.textContent} =`;
                pantalla.textContent = resultado;
                operacionActual = ''; // Resetea la operación actual
                operadorSeleccionado = ''; // Resetea el operador seleccionado
                nuevoNumero = true;
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }

        if (boton.id === "operadores") {
            operadorSeleccionado = botonApretado;
            operacionActual = pantalla.textContent + operadorSeleccionado;
            subPantalla.textContent = operacionActual;
            nuevoNumero = true;
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error!" || nuevoNumero) {
            pantalla.textContent = botonApretado;
            nuevoNumero = false;
        } else {
            pantalla.textContent += botonApretado;
        }
    });
});

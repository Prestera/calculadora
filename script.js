const subPantalla = document.querySelector(".subPantalla");
const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");
const limiteCaracteres = 12;

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            subPantalla.textContent = "";
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
                 
                subPantalla.textContent = pantalla.textContent + " =";
                pantalla.textContent = eval(pantalla.textContent);
              
                
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }


        if (pantalla.textContent.length < limiteCaracteres) {
            if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
                pantalla.textContent = botonApretado;
            } else {
                const ultimoCaracter = pantalla.textContent.slice(-1);
                const esOperador = ["+", "-", "*", "/"].includes(botonApretado);
                const esUltimoCaracterOperador = ["+", "-", "*", "/"].includes(ultimoCaracter);

                if (esOperador && esUltimoCaracterOperador) {
                    pantalla.textContent = pantalla.textContent.slice(0, -1) + botonApretado;
                } else {
                    if(botonApretado === esOperador){
                        subPantalla.textContent += pantalla.textContent;
                        
                    }
                    pantalla.textContent += botonApretado;
                }
            }
        }
    })



})
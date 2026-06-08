const btnCalcular = document.getElementById("btnCalcular");
const inputNumero = document.getElementById("inputNumero");
const selectBase = document.getElementById("selectBase"); 
const resultadoTexto = document.getElementById("resultadoTexto");

const miFuncion = (numero, base) => {
    let resultado = ""; 

    if (base === 2) {
        let decimal = parseInt(String(numero), 2);
    
        if (isNaN(decimal) || String(numero).match(/[^01]/)) {
            resultado = "Número binario no válido";
        } else {
            resultado = `${decimal} base 10`;
        }
        
    } else if (base === 10) {
        let binario = Number(numero).toString(2);
        
        if (binario === "NaN") {
            resultado = "Número decimal no válido";
        } else {
            resultado = `${binario} base 2`;
        }
        
    } else {
        resultado = "Base no soportada";
    }

    return resultado; 
};


btnCalcular.addEventListener("click", () => {
    const numero = inputNumero.value.trim();

    if (numero === "") {
        resultadoTexto.textContent = "Por favor, ingrese un número";
        return;
    }

    const base = parseInt(selectBase.value);

    const textoFinal = miFuncion(numero, base);

    resultadoTexto.textContent = textoFinal;

    inputNumero.value = "";
    inputNumero.focus();
});

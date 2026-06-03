const btnCalcular = document.getElementById("btnCalcular");
const inputNumero = document.getElementById("inputNumero");
const selectBase = document.getElementById("selectBase"); 
const resultadoTexto = document.getElementById("resultadoTexto");

const miFuncion = (numero, base) => {
    if (base === 2) {
        let decimal = parseInt(String(numero), 2);
    
        if (isNaN(decimal) || String(numero).match(/[^01]/)) {
            return "Número binario no válido";
        }
        
        return `${decimal} base 10`;
    } else if (base === 10) {
        let binario = Number(numero).toString(2);
        
        if (binario === "NaN") return "Número decimal no válido";
        
        return `${binario} base 2`;
    } else {
        return "Base no soportada";
    }
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

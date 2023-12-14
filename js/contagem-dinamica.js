export function contagemDinamica () {

// Número para o qual você quer contar
const porcentagem = 90;
let contadorAtual = 0;
let contadorInterval; // Declare a variável do intervalo fora da função

// Elemento onde o contador será exibido
const contadorElemento1 = document.getElementById('contador1');

// Função para incrementar o contador
 function incrementarContador() {
    contadorAtual++;
    contadorElemento1.textContent = contadorAtual;

    if (contadorAtual === porcentagem) {
        clearInterval(contadorInterval);
    }
}

const numeros = 25000;
let contadorAtual2 = 0;
let contadorInterval2 = 100; // Declare a variável do intervalo fora da função

// Elemento onde o contador será exibido
const contadorElemento2 = document.getElementById('contador2');

// Função para incrementar o contador
 function incrementarContador2() {
    contadorAtual2 = contadorAtual2 + 50;
    contadorElemento2.textContent = contadorAtual2.toLocaleString('pt-BR');

    if (contadorAtual2 === numeros) {
        clearInterval(contadorInterval2);
    }
}
const numeros2 = 2;
let contadorAtual3 = 0;
let contadorInterval3; // Declare a variável do intervalo fora da função


// Elemento onde o contador será exibido
const contadorElemento3 = document.getElementById('contador3');

// Função para incrementar o contador
 function incrementarContador3() {
    contadorAtual3++;
    contadorElemento3.textContent = contadorAtual3;

    if (contadorAtual3 === numeros2) {
        clearInterval(contadorInterval3);
    }
}

// Função para reiniciar o observador
function reiniciarObservador() {
    contadorInterval = setInterval(incrementarContador, 30);
    contadorInterval2 = setInterval(incrementarContador2, 0.0001);
    contadorInterval3 = setInterval(incrementarContador3, 1000);
    
}

const contadorOptions = {
    root: null, // Usa o viewport como área de observação
    threshold: 0.5 // Define o valor de visibilidade para acionar a observação
};

const contadorObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            observer.disconnect(); // Desconecta o observador para evitar múltiplas execuções
            reiniciarObservador();
        }
    });
}, contadorOptions);

contadorObserver.observe(contadorElemento1);

}

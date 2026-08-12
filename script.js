const tabuleiro = document.querySelector(".tabuleiro-grid");
const btnIniciar = document.querySelector(".iniciar-game");

let totalDeCasas = 144;

function criarTabuleiro() {
  for (let i = 0; i < totalDeCasas; i++) {
    const celulas = document.createElement("div");
    celulas.classList.add("celula");
    tabuleiro.appendChild(celulas);
  }
}

criarTabuleiro();
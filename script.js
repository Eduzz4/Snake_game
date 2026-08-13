const tabuleiro = document.querySelector(".tabuleiro-grid");
const btnIniciar = document.querySelector(".iniciar-game");

let totalDeCasas = 144;

function criarTabuleiro() {
  let listaDeDivs = [];
  for (let i = 0; i < totalDeCasas; i++) {
    const celula = document.createElement("div");
    celula.classList.add("celula");
    listaDeDivs.push(celula);
    tabuleiro.appendChild(celula);
  }
  enderecarGrid(listaDeDivs);
}

function enderecarGrid(div) {
  let x = 0;
  let y = 0;

  div.forEach((elemento) => {
    if (x < 11) {
      elemento.dataset.x = x;
      elemento.dataset.y = y;
      x += 1;
    } else {
      elemento.dataset.x = x;
      elemento.dataset.y = y;
      x = 0;
      y += 1;
    }
  });
}

criarTabuleiro();

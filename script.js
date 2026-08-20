const tabuleiro = document.querySelector(".tabuleiro-grid");
const btnIniciar = document.querySelector(".iniciar-game");

let totalDeCasas = 144;
let divsPorLinha = 12;
let listaDeDivs = [];
let corpoSnake = [];
let direcaoAtual = null;
let loopJogo = null;
let jogoComecou = false;
let posComida;

function criarTabuleiro() {
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
btnIniciar.addEventListener("click", iniciarGame);

function iniciarGame() {
  corpoSnake.forEach((e) => e.classList.remove("snake"));
  corpoSnake = [];
  direcaoAtual = null;
  // procura uma div no tabuleiro e a atribui a outra variável
  let divEncontrada = listaDeDivs.find(
    (element) => element.dataset.x === "6" && element.dataset.y === "6",
  );
  corpoSnake.push(divEncontrada);
  desenharSnake(corpoSnake);
  criarComida();
}

function desenharSnake(snake) {
  snake.forEach((element) => {
    element.classList.add("snake");
  });
}

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") direcaoAtual = "up";
  if (event.key === "ArrowDown") direcaoAtual = "down";
  if (event.key === "ArrowLeft") direcaoAtual = "left";
  if (event.key === "ArrowRight") direcaoAtual = "right";

  if (!jogoComecou) {
    jogoComecou = true;
    loopJogo = setInterval(movimentarSnake, 200);
  }
});

function movimentarSnake() {
  let posAtual = corpoSnake[0];
  let posX = Number(posAtual.dataset.x);
  let posY = Number(posAtual.dataset.y);

  if (direcaoAtual === "up") posY -= 1;
  if (direcaoAtual === "down") posY += 1;
  if (direcaoAtual === "left") posX -= 1;
  if (direcaoAtual === "right") posX += 1;

  let proPos = listaDeDivs.find(
    (element) =>
      element.dataset.x === String(posX) && element.dataset.y === String(posY),
  );

  if (proPos) {
    corpoSnake.unshift(proPos);
    desenharSnake(corpoSnake);
  } 

  if(proPos === posComida) {
    posComida.classList.remove("food");
    criarComida();
  } else {
    let raboSnake = corpoSnake.pop();
    raboSnake.classList.remove("snake");
  }
}

function criarComida() {
  do {
    let comidaX = Math.floor(Math.random() * divsPorLinha);
    let comidaY = Math.floor(Math.random() * divsPorLinha);

    posComida = listaDeDivs.find(
      (element) =>
        element.dataset.x === String(comidaX) &&
        element.dataset.y === String(comidaY),
    );
  } while (corpoSnake.includes(posComida));

  posComida.classList.add("food");
}

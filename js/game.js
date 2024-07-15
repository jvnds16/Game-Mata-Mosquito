// Variáveis globais
var height = 0;
var width = 0;
var lifes = 1;
var time = 15;

var createMoscaTime = 1500;

var nivel = window.location.search
nivel = nivel.replace('?', '');

if(nivel === 'normal') {
    // 1500 milisegundos
    createMoscaTime = 1500;
} else if (nivel === 'dificil') {
    // 1000 milisegundos
    createMoscaTime = 1000;
} else if (nivel === 'chucknorris') {
    // 750 milisegundos
    createMoscaTime = 750;
}

// Ajustando o tamanho do jogo
function AdjustGameSize() {
  height = window.innerHeight;
  width = window.innerWidth;
}

AdjustGameSize();

var cronometer = setInterval(function() {
    time -= 1;
    if(time < 0) {
        clearInterval(cronometer);
        clearInterval(createMosca);
        window.location.href = 'vitoria.html';
    } else {
        document.getElementById('cronometer').innerHTML = time;
    }
}, 1000);

console.log(height, width);

// Criando posições randômicas
function randomPosition() {
  // Remover mosca anterior (caso exista)
  if (document.getElementById("mosca")) {
    document.getElementById("mosca").remove();

    if (lifes > 3) {
        window.location.href = 'fim_de_jogo.html';
    } else {
      document.getElementById("v" + lifes).src = "img/coracao_vazio.png";
      lifes++;
    }
  }

  var positionX = Math.floor(Math.random() * width);
  var positionY = Math.floor(Math.random() * height);

  positionX = positionX < 0 ? 0 : positionX;
  positionY = positionY < 0 ? 0 : positionY;

  console.log(positionX, positionY);

  // Criar o elemento HTML
  var mosca = document.createElement("img");
  mosca.src = "img/mosca.png";
  mosca.className = aleatorySize() + " " + aleatorySide();
  mosca.style.left = positionX + "px";
  mosca.style.top = positionY + "px";
  mosca.style.position = "absolute";
  mosca.id = "mosca";
  mosca.onclick = function () {
    this.remove();
  };

  document.body.appendChild(mosca);
}

// Cria tamanhos aleatórios de moscas
function aleatorySize() {
  var _class = Math.floor(Math.random() * 3);

  switch (_class) {
    case 0:
      return "mosca1";
    case 1:
      return "mosca2";
    case 2:
      return "mosca3";
  }
}

// Criando lados para a mosca
function aleatorySide() {
  var _class = Math.floor(Math.random() * 2);

  switch (_class) {
    case 0:
      return "sideA";
    case 1:
      return "sideB";
  }
}

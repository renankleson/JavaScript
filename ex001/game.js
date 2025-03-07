// Variáveis do jogo
let player = document.getElementById("player");
let gameArea = document.getElementById("gameArea");
let scoreElement = document.getElementById("score");

let playerPositionX = 50; // Posição inicial do jogador
let playerPositionY = 450; // Posição inicial do jogador
let score = 0; // Pontuação do jogo

let obstacles = [
  document.getElementById("obstacle1"),
  document.getElementById("obstacle2")
];

let gameWidth = gameArea.offsetWidth;
let gameHeight = gameArea.offsetHeight;

let obstacleSpeed = 5;

// Função para atualizar a pontuação
function updateScore() {
  scoreElement.innerText = "Pontos: " + score;
}

// Função para gerar obstáculos aleatoriamente
function generateObstacles() {
  obstacles.forEach((obstacle, index) => {
    if (obstacle.offsetTop >= gameHeight) {
      obstacle.style.left = Math.random() * (gameWidth - 40) + "px";
      obstacle.style.top = -40 + "px"; // Posiciona o obstáculo fora da tela
    }
    obstacle.style.top = obstacle.offsetTop + obstacleSpeed + "px";
    
    // Verifica colisões
    if (checkCollision(obstacle)) {
      alert("Game Over! Pontuação final: " + score);
      resetGame();
    }
  });
}

// Função para verificar colisões
function checkCollision(obstacle) {
  let playerRect = player.getBoundingClientRect();
  let obstacleRect = obstacle.getBoundingClientRect();
  
  return !(playerRect.right < obstacleRect.left || 
           playerRect.left > obstacleRect.right || 
           playerRect.bottom < obstacleRect.top || 
           playerRect.top > obstacleRect.bottom);
}

// Função para mover o jogador
function movePlayer(direction) {
  if (direction === "left" && playerPositionX > 0) {
    playerPositionX -= 10;
  } else if (direction === "right" && playerPositionX < gameWidth - 50) {
    playerPositionX += 10;
  }
  
  player.style.left = playerPositionX + "px";
}

// Função para reiniciar o jogo
function resetGame() {
  playerPositionX = 50;
  playerPositionY = 450;
  score = 0;
  updateScore();
  
  obstacles.forEach(obstacle => {
    obstacle.style.top = -40 + "px";
  });
}

// Função para animar o jogo
function gameLoop() {
  generateObstacles();
  score++;
  updateScore();
  requestAnimationFrame(gameLoop);
}

// Event listener para movimentar o jogador
document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowLeft") {
    movePlayer("left");
  } else if (event.key === "ArrowRight") {
    movePlayer("right");
  }
});

// Iniciar o jogo
gameLoop();

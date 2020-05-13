const btnStart = document.getElementById('btnStart'),
      colorBlue = document.getElementById('btnBlue'),
      colorGreen = document.getElementById('btnGreen'),
      colorRed = document.getElementById('btnRed'),
      colorYellow = document.getElementById('btnYellow');

class Game {
  constructor() {
    this.sequence;
    this.level;
    this.colors;

    this.initialize()
    this.generateSequence()
  }

  initialize () {
    btnStart.setAttribute('disabled', true)
    this.level = 1
    this.colors = {
      colorBlue,
      colorGreen,
      colorRed,
      colorYellow
    }
  }
  generateSequence() {
    // Indicar que me genere un nuevo array, .fill inicializa todos los campos en 0
    this.sequence = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
  }
}

function startGame() {
  window.game = new Game();
}

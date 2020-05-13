const btnStart = document.getElementById('btnStart'),
      btnBlue = document.getElementById('btnBlue'),
      btnGreen = document.getElementById('btnGreen'),
      btnRed = document.getElementById('btnRed'),
      btnYellow = document.getElementById('btnYellow');

class Game {
  constructor() {
    this.initialize()
  }

  initialize () {
    console.log('initialize')
    btnStart.setAttribute('disabled', true)
  }
}

function startGame() {
  let game = new Game();
}

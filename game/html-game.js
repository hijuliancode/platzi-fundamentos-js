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
    this.nextLevel()
  }

  initialize () {
    console.log('initialize')
    this.selectColor = this.selectColor.bind(this)
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
    console.log('this.sequence', this.sequence)
  }
  nextLevel() {
    this.illuminateSequence()
    this.addEventClick()
  }
  illuminateSequence() {
    console.log('this.level', this.level)
    for (let i = 0; i < this.level; i++) {
      const color = this.numberToColor(this.sequence[i])
      console.log('illuminateSequence color', color)
      setTimeout(() => this.illuminateColor(color), 1000 * i);
    }
  }
  numberToColor(num) {
    console.log('numberToColor', num)
    switch (num) {
      case 0:
        return 'colorBlue'
      case 1:
        return 'colorGreen'
      case 2:
        return 'colorRed'
      case 3:
        return 'colorYellow'
    }
  }
  illuminateColor(color) {
    console.log('illuminateColor', color)
    switch (color) {
      case 'colorBlue':
        this.colors[color].classList.remove('btn-outline-primary')
        this.colors[color].classList.add('btn-primary')
        break;
      case 'colorGreen':
        this.colors[color].classList.remove('btn-outline-success')
        this.colors[color].classList.add('btn-success')
        break;
      case 'colorRed':
        this.colors[color].classList.remove('btn-outline-danger')
        this.colors[color].classList.add('btn-danger')
        break;
      case 'colorYellow':
        this.colors[color].classList.remove('btn-outline-warn')
        this.colors[color].classList.add('btn-warn')
        break;
    }
    setTimeout(() => this.turnOffColor(color), 350);
  }
  turnOffColor(color) {
    switch (color) {
      case 'colorBlue':
        this.colors[color].classList.remove('btn-primary')
        this.colors[color].classList.add('btn-outline-primary')
        break;
      case 'colorGreen':
        this.colors[color].classList.remove('btn-success')
        this.colors[color].classList.add('btn-outline-success')
        break;
      case 'colorRed':
        this.colors[color].classList.remove('btn-danger')
        this.colors[color].classList.add('btn-outline-danger')
        break;
      case 'colorYellow':
        this.colors[color].classList.remove('btn-warn')
        this.colors[color].classList.add('btn-outline-warn')
        break;
    }
  }
  addEventClick() {
    this.colors.colorBlue.addEventListener('click', this.selectColor)
    this.colors.colorGreen.addEventListener('click', this.selectColor)
    this.colors.colorRed.addEventListener('click', this.selectColor)
    this.colors.colorYellow.addEventListener('click', this.selectColor)
  }
  selectColor(ev) {
    console.log('selectColor ev', ev)
    console.log('selectColor this', this)
  }
}

function startGame() {
  window.game = new Game();
}

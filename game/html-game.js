const btnStart = document.getElementById('btnStart'),
      colorBlue = document.getElementById('btnBlue'),
      colorGreen = document.getElementById('btnGreen'),
      colorRed = document.getElementById('btnRed'),
      colorYellow = document.getElementById('btnYellow')
      LAST_LEVEL = 10;

class Game {
  constructor() {
    this.sequence;
    this.level;
    this.sublevel;
    this.colors;

    this.initialize()
    this.generateSequence()
    setTimeout(this.nextLevel, 500)
  }

  initialize () {
    this.nextLevel = this.nextLevel.bind(this)
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
    this.sequence = new Array(LAST_LEVEL).fill(0).map(n => Math.floor(Math.random() * 4))
  }
  nextLevel() {
    this.sublevel = 0
    this.illuminateSequence()
    this.addEventsClick()
  }
  illuminateSequence() {
    for (let i = 0; i < this.level; i++) {
      const color = this.numberToColor(this.sequence[i])
      setTimeout(() => this.illuminateColor(color), 1000 * i);
    }
  }
  numberToColor(num) {
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
  colorToNumber(color) {
    switch (color) {
      case 'colorBlue':
        return 0
      case 'colorGreen':
        return 1
      case 'colorRed':
        return 2
      case 'colorYellow':
        return 3
    }
  }
  illuminateColor(color) {
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
  addEventsClick() {
    this.colors.colorBlue.addEventListener('click', this.selectColor)
    this.colors.colorGreen.addEventListener('click', this.selectColor)
    this.colors.colorRed.addEventListener('click', this.selectColor)
    this.colors.colorYellow.addEventListener('click', this.selectColor)
  }
  removeEventsClick() {
    this.colors.colorBlue.removeEventListener('click', this.selectColor)
    this.colors.colorGreen.removeEventListener('click', this.selectColor)
    this.colors.colorRed.removeEventListener('click', this.selectColor)
    this.colors.colorYellow.removeEventListener('click', this.selectColor)
  }
  selectColor(ev) {
    const colorName = ev.target.dataset.color
    const colorNumber = this.colorToNumber(colorName)
    this.illuminateColor(colorName)
    if (colorNumber === this.sequence[this.sublevel]) {
      this.sublevel++
      if (this.sublevel === this.level) {
        this.level++
        this.removeEventsClick()
        if (this.level === (LAST_LEVEL + 1)) {
          // Ganó!
        } else {
          setTimeout(this.nextLevel, 1500);
        }
      }
    } else {
      // Perdió
    }
  }
}

function startGame() {
  window.game = new Game();
}

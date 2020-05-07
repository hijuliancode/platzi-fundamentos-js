// Podemos pasar funciones como parametros

class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
  saludar(fn) {
    let { nombre, apellido } = this
    console.log(`Hola, me llamo ${nombre} ${apellido}`)
    if (fn) { // Si la función esta definida / si pasaron la función como parametro
      fn(nombre, apellido) // al no pasar parametro si es desarrollador, es evaluador como falso
    }
  }
  soyAlta() {
    console.log(this.altura >= 1.80);
    return this.altura >= 1.80;
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura); // De esta manera llamamos al constructor de la clase padre
  }
  saludar(fn) {
    let { nombre, apellido } = this
    console.log(`Hola me llamo ${nombre} ${(apellido).charAt(0)}. y soy desarrollador/a`)
    if (fn) { // Si la función esta definida / si pasaron la función como parametro
      fn(nombre, apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido}`);
  if (esDev) {
    console.log('Ah, no sabía que eras desarrollador/a')
  }
}

var julian = new Desarrollador('Julian', 'Sosa', 1.80)
var carlos = new Persona('Carlos', 'Sosa', 1.82)
var valentina = new Persona('Valentina', 'Sosa', 1.22)
var ginna = new Desarrollador('Ginna', 'Mora', 1.67)
var pomodoro = new Desarrollador('Pomodoro', 'Time', 1.75)

julian.saludar()
carlos.saludar(responderSaludo)
valentina.saludar()
ginna.saludar(responderSaludo)
pomodoro.saludar(responderSaludo)



// Funciones como parámetros
/**
  En JavaScript, los parámetros de funciones son por defecto undefined.
  De todos modos, en algunas situaciones puede ser útil colocar un valor por defecto diferente que lo evalúe como verdadero.
 */

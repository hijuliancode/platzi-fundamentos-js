class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
  saludar() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
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
  saludar() {
    console.log(`Hola me llamo ${this.nombre} ${(this.apellido).charAt(0)} y soy desarrollador/a`)
  }
}

var julian = new Persona('Julian', 'Sosa', 1.80)
var carlos = new Persona('Carlos', 'Sosa', 1.82)
var valentina = new Persona('Valentina', 'Sosa', 1.22)
var ginna = new Desarrollador('Ginna', 'Mora', 1.67)
var pomodoro = new Desarrollador('Pomodoro', 'Time', 1.75)

julian.soyAlta()
carlos.soyAlta()
valentina.soyAlta()
ginna.soyAlta()

// Clases en JavaScript
/**
  Las clases de JavaScript son introducidas en el ECMAScript 2015 y 
  son una mejora en la sintaxis sobre la herencia basada en prototipos de JavaScript.

  La palabra clave extends se usa en declaraciones de clase o expresiones de clasepara crear una clase que es hija de otra clase.

  El método constructor es un método especial para crear e inicializar un objeto creado a partir de una clase.

 */

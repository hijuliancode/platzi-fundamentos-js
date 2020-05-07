function Persona(nombre, apellido, altura) {
  // Esta función se va a ejecutar cuando creemos una nueva persona
  // Implicitamente retorna this cuando llamamos esta función con la palabra 'new'
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
Persona.prototype.soyAlta = function() {
  return this.altura >= 1.80;
}

var julian = new Persona('Julian', 'Sosa', '1.80')
var carlos = new Persona('Carlos', 'Sosa', '1.82')
var valentina = new Persona('Valentina', 'Sosa', '1.22')
var ginna = new Persona('Ginna', 'Mora', '1.67')
var pomodoro = new Persona('Pomodoro', 'Time', '1.75')

julian.saludar()
carlos.saludar()
valentina.saludar()
ginna.saludar()



// Cómo funcionan las clases en JavaScript
/**
  Las clases son funciones cuya sintaxis tiene dos componentes:

  - expresiones
  - declaraciones

  Reto: agrega el atributo altura y la función soyAlto.

 */
